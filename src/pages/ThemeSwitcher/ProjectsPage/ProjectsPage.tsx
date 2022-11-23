import { iDisplay, DisplayElement } from "../ResumePage/ResumePage";
import tacoImage from "../../../assets/taco.jpg";
import hallowImage from "../../../assets/hallow.jpg";
import spaceImage from "../../../assets/spaceBackground.png";

import "./ProjectsPage.scss";
import { ThemeManagerContext } from "../../../App";
import { useContext } from "react";
const ProjectsPage = () => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const jobList: iDisplay[] = [
    {
      label: "The Asteroid Dome",
      date: "2020 - Present",
      image: spaceImage,
      context: [
        "A Mobile Online Multiplayer game that straps the player in the pilots seat as they make there way in the galaxy. Buy, Sell & Trade and battle to increase your standing within the galaxy! Fight other players in pitched PvP action!",
      ],
    },
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
  ];
  return (
    <div className="center-resume-container">
      <h1
        className="text-headline"
      >
        Projects
      </h1>
      <div className="displayContainer">
        {jobList.map((job, i) => {
          return <DisplayElement key={`display-element-${job.label}`} options={job} themeManager={themeManager} />;
        })}
      </div>
    </div>
  );
};
export default ProjectsPage;
