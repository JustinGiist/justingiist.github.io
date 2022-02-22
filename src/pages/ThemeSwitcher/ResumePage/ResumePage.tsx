import { useContext, useState } from "react";
import DesignBackground from "../../../components/BezierBackground/DesignBackground";
import "./ResumePage.scss";
import tacoImage from "../../../assets/taco.jpg";
import hallowImage from "../../../assets/hallow.jpg";
import spaceImage from "../../../assets/spaceBackground.png";
import ParallaxBackground from "../../../components/BezierBackground/ParallaxBackground";
import { ThemeManagerContext } from "../../../App";
import { GlobalThemes } from "../../../ThemeManager";
import { useNavigate } from "react-router-dom";
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
        "ASP.NET MVC",
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
      ],
    },
  ];
  const jobList: iDisplay[] = [
    {
      label: "StatusQuote Inc - Developer",
      date: "January 2020 - Present",
      context: [
        "Constructed a React Native and React Combined Solution that could run both simultaneously. Then split Logic Codebase from the Rendering Codebase of each platform (IOS, Android, Website). This allowed the Logic Codebase to be reused for all platforms.",
        "Developed the UI/UX Experience for an Enterprise-Level Investment app built in React Native and React. Used many common controls such as Material, Kendo and many Chart controls for Dashboards.",
        "Exchanged communications with many top level clients, such as the Head of a Global Medical Company, to accurately create enterprise level in-house financial applications and organizational software.",
        "Created programs that organizes financial data into Government Regulated Excel and PDF documents to be submitted easily. Simplifying a meticulous week-long process, to only a click of a button.",
        "Worked on a multitude of projects ranging from React, Angular, .Net MVC, React Native, and many older in-house systems. I adapted quickly to new languages, new techniques and new enviornments to be successful.",
      ],
    },
    {
      label: "GhoulCode",
      date: "2019 - Present",
      context: [
        "Enhanced the UI/UX Experience design of the webpage. Made it so the customers could find products and added visual enhancements that made the site more interactive and fun.",
      ],
    },
    {
      label: "ABC Fine Wine & Spirits - Team Manager",
      date: "2017 - 2019",
      context: [
        "Managed and assigned daily tasks to all team members. Accepted Truck deliveries, Money deposits, and took inventory.",
      ],
    },
    {
      label: "Falcon of the Nile Water Solutions - Account Manager",
      date: "2008 - 2017",
      context: [
        "Managed many commerical Bodies of Water with Clients such as Disney, Universal, Hilton and many more.",
        "Trained many employees to abide by Government Water Regulations.",
      ],
    },
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
      </div>
      <div className="parallax_layer one">
        <div className="hero-section">
          <DesignBackground />
          <div className="titleContainer">
            <div className="flex column">
              {/*<div
                className=" 
            headline one"
              >
                Justin Gist
              </div>*/}
              <div
                className=" 
            headline two"
              >
                Designer
              </div>
              <div
                className=" 
            headline two"
              >
                UI/UX Developer
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section B">
          <div className="center ">
            {languagesList.map((job, i) => {
              return <DisplayElement options={job} />;
            })}
          </div>
        </div>
        <div className="hero-section B">
          <div className=" center">
            {techList.map((job, i) => {
              return <DisplayElement options={job} />;
            })}
          </div>
        </div>
        <div className="headline one textTitle">Projects</div>
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
            <div className="headline one textTitle">Like my designs?</div>
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
export const DisplayElement = ({ options }: { options: iDisplay }) => {
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
        <div className={"textSecondary headline one "}>{options.label}</div>
        <div className="textPrimary headline four ">{options.date ?? ""}</div>
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
                    }}
                    key={i}
                  >
                    <div className={"textTeritary headline three "}>{job}</div>
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
        <div className={"textTitle headline one "}>{options.label}</div>
        <div className="textSecondary headline three ">
          {options.date ?? ""}
        </div>
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
                    }}
                    key={i}
                  >
                    <div className={"textTeritary headline four "}>{job}</div>
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
