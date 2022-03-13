import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ThemeManagerContext } from "../../App";
import EnterpriseTheme from "../../pages/ThemeSwitcher/EnterpriseTheme/EnterpriseTheme";
import SpookyTheme from "../../pages/ThemeSwitcher/SpookyTheme";
import { GlobalThemes, useWindowDimensions } from "../../ThemeManager";
import NavBar from "../NavBar/NavBar";
import "./RenderComponent.scss";
import ResumePage from "../../pages/ThemeSwitcher/ResumePage/ResumePage";
import OverlayControl from "../OverlayControl/OverlayControl";
import ContactPage from "../../pages/ThemeSwitcher/ContactPage/ContactPage";
import SideBar from "../SideBar/SideBar";
import SalesTheme from "../../pages/ThemeSwitcher/SalesTheme/SalesTheme";
import DesignBackground from "../BezierBackground/DesignBackground";
import TestPage from "../../pages/testPage";
const RenderComponent = ({ url }: { url: GlobalThemes }) => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  let isTopBar = true;
  const routes = new Map<string, any>([
    [GlobalThemes.Resume, <ResumePage />],
    [GlobalThemes.Contact, <ContactPage />],
    [GlobalThemes.Sales, <SalesTheme />],
    [GlobalThemes.Enterprise, <EnterpriseTheme />],
    [GlobalThemes.Spooky, <SpookyTheme />],
    [GlobalThemes.Test, <TestPage />],
  ]);
  const newPage = routes.get(url);
  const checkBackground = () => {
    switch (url) {
      case GlobalThemes.Resume:
      case GlobalThemes.Contact:
      case GlobalThemes.Projects:
        return false;
      default:
        return false;
    }
  };
  const checkSideBar = () => {
    switch (url) {
      case GlobalThemes.Resume:
      case GlobalThemes.Contact:
      case GlobalThemes.Projects:
      case GlobalThemes.Spooky:
      case GlobalThemes.Sales:
      case GlobalThemes.Test:
        return false;
      default:
        return true;
    }
  };
  const showBackground = checkBackground();
  const showSideBar = checkSideBar();
  useEffect(() => {
    setThemeContext(url);
  });
  return (
    <>
      {showBackground && <DesignBackground />}
      <div id="animationOverlay" className="animationOverlay"></div>
      <div
        className={"renderContainer " + url + (isTopBar ? " horizontal" : "")}
      >
        <div className="topContainer">
          <NavBar isTopBar={isTopBar} />
        </div>
        <div className="bottomContainer">
          {showSideBar && <SideBar gooMenu={url === GlobalThemes.Enterprise} />}
          <CalculatedScrollComponent hasButtons={false} refresh={[]}>
            <div className={"mainContent " + url}>
              {!newPage ? <OverlayControl loading={true} /> : newPage}
            </div>
          </CalculatedScrollComponent>
        </div>
      </div>
    </>
  );
};
export default RenderComponent;
export const CalculatedScrollComponent = (props: {
  children: any;
  hasButtons: boolean;
  refresh: any[];
  overflowHidden?: boolean;
}) => {
  const dimensions = useWindowDimensions();
  const resizeRef = useRef<any>(null);
  const buttonSpacing = useRef<number>(0);
  const initialResize = (firstCall?: boolean) => {
    if (resizeRef.current) {
      resizeChildrenContainer();
      if (firstCall) {
        setTimeout(() => {
          initialResize();
        }, 500);
      }
    } else {
      setTimeout(() => {
        initialResize();
      }, 500);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeChildrenContainer);
    initialResize(true);
    return () => {
      window.removeEventListener("resize", resizeChildrenContainer);
    };
  }, []);
  useEffect(() => {
    buttonSpacing.current = props.hasButtons ? 72 : 0;
  }, [props.hasButtons]);
  useEffect(() => {
    resizeChildrenContainer();
  }, [resizeRef, ...props.refresh, buttonSpacing.current]);
  const resizeChildrenContainer = () => {
    if (resizeRef.current) {
      const resizeContainerRect = resizeRef.current.getBoundingClientRect();
      const calcWeight = window.innerWidth;
      const calcHeight =
        window.innerHeight - resizeContainerRect.y - 0 - buttonSpacing.current;
      resizeRef.current.style.height = calcHeight.toString() + "px";
      resizeRef.current.style.width = calcWeight.toString() + "px";
    }
  };
  return (
    <div
      ref={resizeRef}
      id="scrollComponent"
      className="scrollComponent"
      style={{
        overflowY: props.overflowHidden ? "hidden" : "auto",
        overflowX: "hidden",
        width: "100%",
        position: "relative",
        display: "flex",
      }}
    >
      {props.children}
    </div>
  );
};
