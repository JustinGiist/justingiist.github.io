import { TextField, Button } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import ParallaxBackground, {
  ParallaxBackgroundCircle,
  ParallaxBackgroundTriangles,
} from "../../../components/BezierBackground/ParallaxBackground";
import "./ContactPage.scss";
const ContactPage = () => {
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

    //return document.removeEventListener("mousemove", parallax);
  }, []);
  const parallax = (event: any) => {
    let scale = false;
    if (window.innerHeight <= 1000 || window.innerWidth >= 1000) scale = true;
    if (backgroundRef.current) {
      //const position = backgroundRef.current.getBoundClientRect();
      const position = 1;
      const x = (window.innerWidth - event.pageX * position) / 100;
      const y = (window.innerHeight - event.pageY * position) / 100;

      backgroundRef.current.style.transform =
        `translateX(${x}px) translateY(${y}px) ` + (scale ? ` scale(2)` : ``);
    }
    if (backgroundRef2.current) {
      //const position = backgroundRef.current.getBoundClientRect();
      const position = 2;
      const x = (window.innerWidth - event.pageX * position) / 100;
      const y = (window.innerHeight - event.pageY * position) / 100;

      backgroundRef2.current.style.transform =
        `translateX(${x}px) translateY(${y}px) ` + (scale ? ` scale(2)` : ``);
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
          </button>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
