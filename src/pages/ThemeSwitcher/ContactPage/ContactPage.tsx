import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  ParallaxBackgroundCircle,
  ParallaxBackgroundTriangles,
} from "../../../components/BezierBackground/ParallaxBackground";
import Icon from "../../../components/Icon/Icon";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import { useWindowDimensions } from "../../../ThemeManager";
import "./ContactPage.scss";

const ContactPage = () => {
  const memoizedPageLayout = useMemo(() => {
    return pageLayout();
  }, []);
  const dimensions = useWindowDimensions();
  const backgroundRef = useRef<any>(null);
  const backgroundRef2 = useRef<any>(null);
  const parallax = useCallback((event: any) => {
    if (dimensions.isMobile) {
      if (backgroundRef.current && backgroundRef2.current) {
        backgroundRef.current.style.transform = ` scale(1.2)`;
        backgroundRef2.current.style.transform = ` scale(1.2)`;
      }
    } else {
      let scale = false;
      if (window.innerHeight <= 1000 || window.innerWidth >= 1000) scale = true;
      if (backgroundRef.current) {
        const position = 1;
        const x = (window.innerWidth - event.pageX * position) / 100;
        const y = (window.innerHeight - event.pageY * position) / 100;

        backgroundRef.current.style.transform =
          `translateX(${x}px) translateY(${y}px) ` +
          (scale ? ` scale(1.5)` : ``);
      }
      if (backgroundRef2.current) {
        const position = 2;
        const x = (window.innerWidth - event.pageX * position) / 100;
        const y = (window.innerHeight - event.pageY * position) / 100;

        backgroundRef2.current.style.transform =
          `translateX(${x}px) translateY(${y}px) ` +
          (scale ? ` scale(1.5)` : ``);
      }
    }
  }, [
    dimensions.isMobile
  ]);
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    if (dimensions.isMobile) {
      parallax({});
    }
    //return document.removeEventListener("mousemove", parallax);
  }, [
    dimensions.isMobile,
    parallax
  ]);

  return (
    <>
      <div className="parallaxBackground" ref={backgroundRef}>
        <ParallaxBackgroundTriangles />
      </div>
      <div className="parallaxBackground" ref={backgroundRef2}>
        <ParallaxBackgroundCircle />
      </div>
      <div className="card contact">
        <Icon 
            icon="Contact" 
            className="float-top-right resume-card-icon"
        />
        <PageLayout pageLayout={memoizedPageLayout} />
      </div>
    </>
  );
};
export default ContactPage;

const pageLayout: () => iPageLayout = () => ({
  id: 'contact',
  labelProps: {
    label: 'Contact',
  },
  contentProps: {
    className: 'background-transparent',
    style: { gap: 24 },
  },
  inputs: [
    {
      id: 'email',
      type: InputTypes.textOnly,
      icon: 'Email',
      labelProps: { style: { alignItems: 'center'} },
      label: 'JustinGistDesigner@gmail.com'
    },
    {
      id: 'linkedIn',
      type: InputTypes.link,
      icon: 'Linkedin',
      label: 'My LinkedIn Profile',
      labelProps: { style: { alignItems: 'center'} },      
      href: 'https://linkedin.com/in/justin-gist-270862b2/'
    },
    {
      id: 'phone',
      type: InputTypes.textOnly,
      icon: 'Phone',
      labelProps: { style: { alignItems: 'center'} },
      label: '(407)-929-3184'
    }
  ]
});