import { Suspense, useMemo } from "react";
import "./ResumePage.scss";
import tacoImage from "../../../assets/taco.jpg";
import hallowImage from "../../../assets/hallow.jpg";
import threePhones from "../../../assets/Three-Phones-Mockup.png";
import racingPhones from "../../../assets/Racing-Mockup.png";
import dashboardMockup from "../../../assets/Dashboard_mockup.png";
import ParallaxBackground from "../../../components/BezierBackground/ParallaxBackground";
import { GlobalThemes } from "../../../ThemeManager";
import { useNavigate } from "react-router-dom";
import React from "react";
import OverlayControl from "../../../components/OverlayControl/OverlayControl";
import HeroPageLayout, { iHeroPageLayout } from "../../../components/HeroPageLayout/HeroPageLayout";
const ThreeDComponentLazy = React.lazy(() => import("./ThreeD"));
const ResumePage = () => {
  const navigate = useNavigate();
  const experienceList: any[] = [
    "As Lead UX Designer at a Tech Consulting Firm, I oversaw many Companies & Clients. Responsibilities included creating Figma mock-ups, documenting user-flows and developing enterprise-level production-ready features. I handled end-to-end design, implementation and coordination with multiple departments within each business.",
    <div>Redesigned <a href="https://www.tigerpistol.com/brand-platform-overview/" target="_blank" rel="noopener noreferrer">TigerPistol's DIFY</a> Advertising Platform, improving mobile friendliness, completely refactoring old code base to React, enhancing internal component libraries, reducing CSS by 50%, and developed a brand new Editor System (The main User Interface behind their Ad Platform).</div>,
    <div>Developed Order Software for <a href="https://www.livantaqio.com/en" target="_blank" rel="noopener noreferrer">Livanta</a> that enabled contractors to create in-house requisitions that flowed through an Approval System. The software also automatically processed the order, generated all relevant tax forms, receipts, and billed company accounts.</div>,
    "Developed the UI/UX Frontend Experience for a Fintech Investment SPA. Built a React & React-Native Solution that split logic and display codebases.",
    "Using SyncFusion XLISO excel conversion library, converted financial data into Excel Government Tax Documents. Simplifying a week-long process, to a click of a button."
  ];
  const languagesList: string[] = [
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
  ];
  const techList: string[] = [
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
  ];
  const experienceHeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          label: "Experience",
          id: "experience",
          type: "container",
          commonProps: {
            className: 'card gap24',
            layoutClassName: 'flexColumn gap16'
          },
          iconProps: {
            icon: 'ShootingStar',
            className: 'float-top-right resume-card-icon'
          },
          components: experienceList.map((experience, i) => ({
              id: `experience-${i}`,
              body: experience,
              type: "text",
              commonProps: {
                className: 'indent-bar'
              }
          }))
        }
      ]
    }),
    []
  );
  const languagesHeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          label: "Languages",
          id: "language",
          type: "container",
          commonProps: {
            className: 'card gap24',
            layoutClassName: 'flex-block-lock'
          },
          iconProps: {
            icon: 'Languages',
            className: 'float-top-right resume-card-icon'
          },
          components: languagesList.map((lang, i) => ({
              id: `language-${i}`,
              body: lang,
              type: "text",
          }))
        }
      ]
    }),
    []
  );
  const techHeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          label: "Technology",
          id: "tech",
          type: "container",
          commonProps: {
            className: 'card gap24',
            layoutClassName: 'flex-block-lock'
          },
          iconProps: {
            icon: 'Tech',
            className: 'float-top-right resume-card-icon'
          },
          components: techList.map((tech, i) => ({
              id: `tech-${i}`,
              body: tech,
              type: "text",
          }))
        }
      ]
    }),
    []
  );
  const project1HeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          label: "Tacopocalypse",
          subLabel: "2016",
          body: "Contract Game project with Cherry Pie Games. Produced Foley Sound Design, Mixed and Edited all tracks. Mixed in Ableton Live and recorded using a range of field microphones.",
          id: "project-1",
          type: "container",
          onClick: () => {
            window.open('https://store.steampowered.com/app/416530/Tacopocalypse/', "_blank");
          },
          commonProps: {
            className: 'card',
          },
          components: [
            {
              id: 'image-taco',
              commonProps: {
                className: 'image',
                style: {
                  height: 240,
                  backgroundImage: `url(${tacoImage})`
                }
              }
            }
          ]
        }
      ]
    }),
    []
  );
  const project2HeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          label: "Hallow",
          subLabel: "2015",
          body: "48 Hour Spooky Game Jam Winner using Leap Motion Controller from UltraLeap. Created immersive screams and haunting sounds. Mixed in Ableton Live and recorded using a range of field microphones.",
          id: "project-2",
          type: "container",
          onClick: () => {
            window.open('https://killerham.itch.io/hollow', "_blank");
          },
          commonProps: {
            className: 'card',
          },
          components: [
            {
              id: 'image-hallow',
              commonProps: {
                className: 'image',
                style: {
                  height: 240,
                  backgroundImage: `url(${hallowImage})`
                }
              }
            }
          ]
        }
      ]
    }),
    []
  );
  const project3HeroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          id: "mockups",
          type: "container",
          components: [
            {
              id: 'phone-mockup-1',
              commonProps: {
                className: 'image',
                style: {
                  height: 360,
                  backgroundImage: `url(${threePhones})`
                }
              }
            },
            {
              id: 'phone-mockup-2',
              commonProps: {
                className: 'image',
                style: {
                  height: 360,
                  backgroundImage: `url(${racingPhones})`
                }
              }
            },
            {
              id: 'phone-mockup-2',
              commonProps: {
                className: 'image',
                style: {
                  height: 460,
                  backgroundImage: `url(${dashboardMockup})`
                }
              }
            }
          ]
        }
      ]
    }),
    []
  );
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
          <Suspense fallback={<OverlayControl />}>
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
            {<ThreeDComponentLazy />}
          </Suspense>
        </div>
        <div className="heroGradient" />
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={experienceHeroPageLayout} />
          </div>
        </div>
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={languagesHeroPageLayout} />
          </div>
        </div>
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={techHeroPageLayout} />
          </div>
        </div>
        <h1 style={{ marginTop: 120, marginBottom: -60 }} className="text-sub-headline">Mockups</h1>
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={project3HeroPageLayout} />
          </div>
        </div>
        <h1 style={{ marginTop: 120, marginBottom: -60 }} className="text-sub-headline">Projects</h1>
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={project1HeroPageLayout} />
          </div>
        </div>
        <div className="hero-section B">
          <div className="center">
            <HeroPageLayout heroPageLayout={project2HeroPageLayout} />
          </div>
        </div>
        <div className="hero-section C" style={{ padding: 0 }}>
          <div className="center">
            <h1 className="text-headline">Like my designs?</h1>
            <button
              className={"button secondary"}
              onClick={() => {
                navigate(`/${GlobalThemes.Contact}`);
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
