import { Suspense, useMemo } from "react";
import "./ResumePage.scss";
import tacoImage from "../../../assets/taco.avif";
import hallowImage from "../../../assets/hallow.avif";
import threePhones from "../../../assets/Three-Phones-Mockup.avif";
import racingPhones from "../../../assets/Racing-Mockup.avif";
import dashboardMockup from "../../../assets/Dashboard_mockup.avif";
import { GlobalThemes } from "../../../ThemeManager";
import { useNavigate } from "react-router-dom";
import React from "react";
import ColumnLayout from "../../../components/Layouts/ColumnLayout";
import Headline from "../../../components/Text/Headline";
import Body from "../../../components/Text/Body";
import BlockLayout from "../../../components/Layouts/BlockLayout";
import RowLayout from "../../../components/Layouts/RowLayout";
import SubHeadline from "../../../components/Text/SubHeadline";
import OverlayControl from "../../../components/OverlayControl/OverlayControl";
import Icon from "../../../components/Icon/Icon";

const ThreeDComponentLazy = React.lazy(() => import("./GlobeElement"));

const ResumePage = () => {
  const navigate = useNavigate();
  const experienceList: any[] = useMemo(() => [
    "As Lead UX Designer at a Tech Consulting Firm, I oversaw many Companies & Clients. Responsibilities included creating Figma mock-ups, documenting user-flows and developing enterprise-level production-ready features. I handled end-to-end design, implementation and coordination with multiple departments within each business.",
    `Redesigned ${<a href="https://www.tigerpistol.com/brand-platform-overview/" target="_blank" rel="noopener noreferrer">TigerPistol's DIFY</a>} Advertising Platform, improving mobile friendliness, completely refactoring old code base to React, enhancing internal component libraries, reducing CSS by 50%, and developed a brand new Editor System (The main User Interface behind their Ad Platform).`,
    `Developed Order Software for ${<a href="https://www.livantaqio.com/en" target="_blank" rel="noopener noreferrer">Livanta</a>} that enabled contractors to create in-house requisitions that flowed through an Approval System. The software also automatically processed the order, generated all relevant tax forms, receipts, and billed company accounts.`,
    "Developed the UI/UX Frontend Experience for a Fintech Investment SPA. Built a React & React-Native Solution that split logic and display codebases.",
    "Using SyncFusion XLISO excel conversion library, converted financial data into Excel Government Tax Documents. Simplifying a week-long process, to a click of a button."
  ], []);
  const languagesList: string[] = useMemo(() => [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "SCSS",
    "C#",
    "SQL",
    "KefirJS",
    "XAML",
    ".Net Core",
    "C++"
  ], []);
  const techList: string[] = useMemo(() => [
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
    "PostGres",
    "Storybook",
    "Knockout"
  ], []);
  return (
    <ColumnLayout gap={156} style={{ alignItems: 'center', padding: '32px', flexWrap: 'nowrap' }}>
      <ColumnLayout gap={32} className="titleContainer">
        <Headline
          id="title"
          data-walkthrough-step="1"
          data-walkthrough-label="My Name"
          data-walkthrough-description="This On-Boarding component will help you traverse the different parts of my website!"
        >
          Justin Gist
        </Headline>
        <Headline
          id="designer"
          size={2}
          data-walkthrough-step="2"
          data-walkthrough-label="Career"
          data-walkthrough-description="Over the course of my professional tenure, I have devoted myself to the practice of UI/UX design, steadily refining my abilities to cultivate a versatile and holistic proficiency that empowers me to produce meaningful and captivating user interfaces."                  
        >
          UI/UX Designer
        </Headline>
        <Suspense fallback={<OverlayControl />}>
          <ThreeDComponentLazy />
        </Suspense>
      </ColumnLayout>
      
      {/* Experience */}
      <ColumnLayout gap={16} isCard
        id="experience"
        data-walkthrough-step="3"
        data-walkthrough-label="Years of expertise"
        data-walkthrough-description="This section highlights select projects that I have conceptualized and executed among many others."
      >
        <Icon 
            icon={'ShootingStar'} 
            className={'float-top-right resume-card-icon'}
        />
        <Headline secondary size={3}>Experience</Headline>
        {experienceList.map((experience, i) => (
          <Body key={`${i}-experience`}>{experience}</Body>
        ))}
      </ColumnLayout>

      {/* Languages */}
      <ColumnLayout gap={16} isCard
        id="languages"
        data-walkthrough-step="4"
        data-walkthrough-label="List of Languages"
        data-walkthrough-description="This section details my proficiency in prominent programming and markup languages."
      >
        <Icon 
            icon={'Languages'} 
            className={'float-top-right resume-card-icon'}
        />
        <Headline secondary size={3}>Languages</Headline>
        <BlockLayout noMobile>
          {languagesList.map(lang => (
            <Body key={lang}>{lang}</Body>
          ))}
        </BlockLayout>
      </ColumnLayout>

      {/* Technology */}
      <ColumnLayout gap={16} isCard
        id="technology"
        data-walkthrough-step="5"
        data-walkthrough-label="List of technologies"
        data-walkthrough-description="This section outlines various technologies I have utilized to effectively execute numerous tasks and designs."
      >
        <Icon 
            icon={'Tech'} 
            className={'float-top-right resume-card-icon'}
        />
        <Headline secondary size={3}>Technology</Headline>
        <BlockLayout noMobile>
          {techList.map(tech => (
            <Body key={tech}>{tech}</Body>
          ))}
        </BlockLayout>
      </ColumnLayout>

      <Headline
        id="mockups"
        data-walkthrough-step="6"
        data-walkthrough-label="Mockups"
        data-walkthrough-description="This section provides an overview of diverse mobile and web design mockups."
      >
        Mockups
      </Headline>
      
      <img loading="lazy" className="dashboardImage image" style={{
        backgroundImage: `url(${threePhones})`
      }} />
      <img loading="lazy" className="dashboardImage image" style={{
        backgroundImage: `url(${racingPhones})`
      }} />
      <img loading="lazy" className="dashboardImage image" style={{
        backgroundImage: `url(${dashboardMockup})`
      }} />

      <Headline
        id="projects"
        data-walkthrough-step="7"
        data-walkthrough-label="Projects"
        data-walkthrough-description="This section provides an account of my prior project experience."
      >
        Projects
      </Headline>

      {/* Tacopocalypse */}
      <ColumnLayout gap={16} isCard onClick={() => {
        window.open('https://store.steampowered.com/app/416530/Tacopocalypse/', "_blank");
      }}>
        <RowLayout layoutClass="flexSB">
          <Headline secondary size={3}>Tacopocalypse</Headline>
          <SubHeadline>2016</SubHeadline>
        </RowLayout>
        <Body>Contract Game project with Cherry Pie Games. Produced Foley Sound Design, Mixed and Edited all tracks. Mixed in Ableton Live and recorded using a range of field microphones.</Body>
        <img loading="lazy" className="image" style={{
          height: 240,
          backgroundImage: `url(${tacoImage})`
        }} />
      </ColumnLayout>

      {/* Hallow */}
      <ColumnLayout gap={16} isCard onClick={() => {
        window.open('https://killerham.itch.io/hollow', "_blank");
      }}>
        <RowLayout layoutClass="flexSB">
          <Headline secondary size={3}>Hallow</Headline>
          <SubHeadline>2015</SubHeadline>
        </RowLayout>
        <Body>48 Hour Spooky Game Jam Winner using Leap Motion Controller from UltraLeap. Created immersive screams and haunting sounds. Mixed in Ableton Live and recorded using a range of field microphones.</Body>
        <img loading="lazy" className="image" style={{
          height: 240,
          backgroundImage: `url(${hallowImage})`
        }} />
      </ColumnLayout>

      <ColumnLayout gap={16} style={{ alignItems: 'center' }}
        id="contact"
        data-walkthrough-step="7"
        data-walkthrough-label="Contact Me"
        data-walkthrough-description="This button will take you to my contact page! Thanks for looking through this On-Boarding Experience!"
      >
        <Headline size={2} className="text-headline">Like my designs?</Headline>
        <button
          className={"button secondary"}
          onClick={() => {
            navigate(`/${GlobalThemes.Contact}`);
          }}
        >
          Contact
        </button>
      </ColumnLayout>
    </ColumnLayout>
  );
};
export default ResumePage;
