import { TextField, Button } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import ParallaxBackground, {
  ParallaxBackgroundCircle,
  ParallaxBackgroundTriangles,
} from "../../../components/BezierBackground/ParallaxBackground";
import Icon from "../../../components/Icon/Icon";
import { useWindowDimensions } from "../../../ThemeManager";
import "./ContactPage.scss";
const ContactPage = () => {
  const dimensions = useWindowDimensions();
  const backgroundRef = useRef<any>(null);
  const backgroundRef2 = useRef<any>(null);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = () => {};
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    if (dimensions.isMobile) {
      parallax({});
    }
    //return document.removeEventListener("mousemove", parallax);
  }, []);
  const parallax = (event: any) => {
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
  };
  return (
    <>
      <div className="parallaxBackground" ref={backgroundRef}>
        <ParallaxBackgroundTriangles />
      </div>
      <div className="parallaxBackground" ref={backgroundRef2}>
        <ParallaxBackgroundCircle />
      </div>
      <div className="centerResumeContainer">
        <div className="textPrimary headline one">Contact</div>
        <div className="contactContainer">
          <div className="contactItem">
            <Icon icon="Email" fontSize={30} />
            <div className="headline four">JustinGistDesigner@gmail.com</div>
          </div>
          <div className="contactItem">
            <Icon icon="Linkedin" fontSize={30} />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/justin-gist-270862b2/"
              className="headline four"
            >
              Justin Gist Linkedin Profile
            </a>
          </div>
          <div className="contactItem">
            <Icon icon="Phone" fontSize={30} />
            <div className="headline four">(407)929-3184</div>
          </div>
          {/*<>
          <div className="inputContainer"> 
            <div className="textInput slideOne">
              <TextField
                label="First Name:"
                value={values.firstName}
                onChange={handleChange("firstName")}
                InputLabelProps={{
                  style: {
                    color: "var(--theme-text-placeholder)",
                  },
                }}
                variant={"filled"}
                fullWidth={true}
              />
            </div>
            <div className="textInput slideTwo">
              <TextField
                label="Last Name:"
                value={values.lastName}
                onChange={handleChange("lastName")}
                variant={"filled"}
                InputLabelProps={{
                  style: {
                    color: "var(--theme-text-placeholder)",
                  },
                }}
                fullWidth={true}
              />
            </div>
          </div>
          <div className="textInput slideThree">
            <TextField
              label="Email Address:"
              value={values.email}
              onChange={handleChange("email")}
              variant={"filled"}
              InputLabelProps={{
                style: {
                  color: "var(--theme-text-placeholder)",
                },
              }}
              fullWidth={true}
            />
          </div>
          <div className="textInput slideFour">
            <TextField
              label="Brief Message:"
              value={values.message}
              onChange={handleChange("message")}
              multiline={true}
              minRows={3}
              variant={"filled"}
              fullWidth={true}
              InputLabelProps={{
                style: {
                  color: "var(--theme-text-placeholder)",
                },
              }}
            />
          </div>
          <button
            className="button secondary slideFive"
            onClick={() => handleSubmit()}
          >
            Submit
          </button></>*/}
        </div>
      </div>
    </>
  );
};
export default ContactPage;
