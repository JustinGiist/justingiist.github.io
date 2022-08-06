import { Suspense, useContext, useState } from "react";
import DesignBackground from "../../../components/BezierBackground/DesignBackground";
import "./ResumePage.scss";
import tacoImage from "../../../assets/taco.jpg";
import hallowImage from "../../../assets/hallow.jpg";
import spaceImage from "../../../assets/spaceBackground.png";
import ParallaxBackground from "../../../components/BezierBackground/ParallaxBackground";
import { ThemeManagerContext } from "../../../App";
import { GlobalThemes } from "../../../ThemeManager";
import { useNavigate } from "react-router-dom";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import OverlayControl from "../../../components/OverlayControl/OverlayControl";
const ThreeDComponentLazy = React.lazy(() => import("./ThreeD"));
export interface iDisplay {
  label: string;
  date?: string;
  image?: string;
  link?: string;
  context?: string[];
  isBulletContext?: boolean;
}
const ResumePage = () => {
  const navigate = useNavigate();
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const languagesList: iDisplay[] = [
    {
      label: "Languages",
      isBulletContext: true,
      context: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "C#",
        "SQL",
        "KefirJS",
        "XAML",
        ".Net Core",
        "C++",
      ],
    },
  ];
  const techList: iDisplay[] = [
    {
      label: "Technologies",
      isBulletContext: true,
      context: [
        "React",
        "React-Native",
        "Angular",
        "Vue.js",
        "Node.js",
        "Three.js",
        "D3.js",
        "WebGL",
        "ASP.NET",
        "Redis",
        "Docker",
        "WPF",
        "Material-Ui",
        "SSMS",
        "AWS",
        "Microsoft Suite",
        "Xamarin",
        "Xamarin-Forms",
        "MySQL",
        "Ableton Live",
        "Google API",
        "Chart.js",
        "Syncfusion",
        "PDF.js",
        "Azure",
        "XlsIO",
      ],
    },
  ];
  const experienceList: string[] = [
    "Developed the UI/UX Frontend Experience for a Fintech Investment SPA. Built a combined React & React-Native Solution that ran both simultaneously & used the same logic codebase for each.",
    "Using SyncFusion XLISO excel conversion library, I converted database data into Financial Chart Data with custom math and conversion formulas according to Government Regulations. Simplifying a meticulous week-long process, to only a click of a button.",
    "Designed entire User Interface for a PDF Editor in Angular. This included animating and developing various menus, navigational tools, and custom tool icons.",
    "Exchanged communications with many top level clients, such as the Head of a Global Medical Company and many CEOs, to accurately gather details for controls and components, turn those into actionable tickets within Jira and delegate tasks to appropriate developers.",
  ];
  const projectList: iDisplay[] = [
    {
      label: "Tacopocalypse",
      date: "2016",
      link: "https://store.steampowered.com/app/416530/Tacopocalypse/",
      image: tacoImage,
      context: [
        "A Contract Game project with Cherry Pie Games. Produced Foley sound design for a Car Skateboarding Game. This included using crazy tools and effects to produce the grinding and metal sounds needed for the game. I mixed them using Ableton Live and recorded it using a range of field microphones.",
      ],
    },
    {
      label: "Hallow",
      date: "2015",
      link: "https://killerham.itch.io/hollow",
      image: hallowImage,
      context: [
        "A 48 Hour Spooky Game Jam Winner using Leap Motion Controller from UltraLeap. I produced real horse noises by visiting a ranch and recording horses running. I then mixed all the sounds I recorded to produce tree falling sounds, horse running loop, and scary dark horror sounds for our spooky game. It produced a fun, immersive and spooky VR Experience using 3D audio effects within Unreal Engine.",
      ],
    },
    {
      label: "The Asteroid Dome",
      date: "2020 - Present",
      image: spaceImage,
      context: [
        "A Mobile Online Multiplayer game that straps the player in the pilots seat as they make there way in the galaxy. Buy, Sell & Trade and battle to increase your standing within the galaxy! Fight other players in pitched PvP action!",
      ],
    },
  ];
  return (
    <>
      <div className="parallax_layer two">
        <div className="hero-section White"></div>
        <div className="hero-section White">
          <ParallaxBackground />
        </div>
        <div className="hero-section White">
          <ParallaxBackground />
        </div>
        <div className="hero-section White">
          <ParallaxBackground />
        </div>
      </div>
      <div className="parallax_layer one">
        <div className="hero-section column" style={{ background: "black" }}>
          <Suspense fallback={<OverlayControl loading />}>
            <div className="titleContainer">
              <div className="flex column">
                <h1>
                  Justin Gist
                </h1>
                <h2>
                  UI/UX Designer
                </h2>
              </div>
            </div>

            <ThreeDComponentLazy />
          </Suspense>
        </div>
        <div className="heroGradient" />
        <div className="hero-section B">
          <div className=" center ">
            <h1 className="text-body">Experience</h1>
            <ExperienceElement list={experienceList} />
          </div>
        </div>
        <div className="hero-section B">
          <div className="center ">
            {languagesList.map((job, i) => {
              return (
                <DisplayElement key={`display-element-${job}`} options={job} themeManager={themeManager} />
              );
            })}
          </div>
        </div>
        <div className="hero-section B">
          <div className=" center">
            {techList.map((job, i) => {
              return (
                <DisplayElement key={`display-element-${job}`}  options={job} themeManager={themeManager} />
              );
            })}
          </div>
        </div>
        <h1 className="text-headline">Projects</h1>
        <div className="hero-section B">
          <div className="center">
            <JobElement options={projectList[0]} />
          </div>
        </div>
        <div className="hero-section C">
          <div className="center">
            <JobElement options={projectList[1]} />
          </div>
        </div>
        <div className="hero-section B">
          <div className="center">
            <JobElement options={projectList[2]} />
          </div>
        </div>
        <div className="hero-section C" style={{ padding: 0 }}>
          <div className="center">
            <h1 className="text-headline">Like my designs?</h1>
            <button
              className={"button secondary"}
              onClick={() => {
                navigate("../" + GlobalThemes.Contact, { replace: true });
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumePage;
export const DisplayElement = ({
  options,
  themeManager,
}: {
  options: iDisplay;
  themeManager: any;
}) => {
  return (
    <div
      style={{ display: "flex" }}
      className={options.link ? "link" : ""}
      onClick={() => {
        if (options.link) {
          window.open(options.link, "_blank");
        }
      }}
    >
      <div className="displayContainer ">
        <h1 className="text-body">{options.label}</h1>
        <h4 className="text-sub-headline">{options.date ?? ""}</h4>
        {options.context && (
          <div
            className={
              options.context.length > 6 ? "gridContext" : "fullContext"
            }
          >
            {options.context &&
              options.context.map((job, i) => {
                return (
                  <li
                    style={{
                      marginBottom: options.isBulletContext ? "4px" : "16px",
                      justifyContent:
                        i % 2 === 0 && themeManager.isMobile
                          ? "flex-end"
                          : "flex-start",
                    }}
                    key={`options-${job}`}
                  >
                    <h3 className="text-sub-headline">{job}</h3>
                  </li>
                );
              })}
          </div>
        )}
      </div>
      {options.image && <img className="jobImage " src={options.image} />}
    </div>
  );
};
const ExperienceElement = ({ list }: { list: string[] }) => {
  return (
    <div className="experienceContainer">
      {list.map((str, i) => {
        return (
          <h4 key={`experience-${str}`} className="text-headline" style={{ marginTop: 24 }}>
            {str}
          </h4>
        );
      })}
    </div>
  );
};
export const JobElement = ({ options }: { options: iDisplay }) => {
  return (
    <div
      style={{ display: "flex" }}
      className={options.link ? "link" : ""}
      onClick={() => {
        if (options.link) {
          window.open(options.link, "_blank");
        }
      }}
    >
      <div className="jobElementContainer ">
        <h1 className="text-body">{options.label}</h1>
        <h3 className="text-headline">{options.date ?? ""}</h3>
        {options.context && (
          <div
            className={
              options.context.length > 6 ? "gridContext" : "fullContext"
            }
          >
            {options.context &&
              options.context.map((job, i) => {
                return (
                  <li
                    style={{
                      marginBottom: options.isBulletContext ? "4px" : "16px",
                      justifyContent: i % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                    key={`options-li-${job}`}
                  >
                    <h4 className="text-sub-headline">{job}</h4>
                  </li>
                );
              })}
          </div>
        )}
        {options.image && <img className="jobImage " src={options.image} />}
      </div>
    </div>
  );
};
