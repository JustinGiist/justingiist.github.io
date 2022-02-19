import { useContext, useMemo, useState } from "react";
import { ThemeManagerContext } from "../../App";
import { GlobalThemes } from "../../ThemeManager";
import NavButton, { NavButtonOptions } from "../NavButton/NavButton";
import "./NavBar.scss";
const NavBar = ({ isTopBar }: { isTopBar?: boolean }) => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const spookyNavButtons: string[] = ["Skull", "Bat"];
  const safariNavButtons: string[] = ["Sun", "Bug"];
  const eightiesNavButtons: string[] = ["Atari", "Invader"];
  const dystopiaNavButtons: string[] = ["Atari", "SportsEsports"];
  const defaultNavButtons: string[] = ["Home", "Themes"];
  const [label, setLabel] = useState("Webpage");
  const [openContext, setOpenContext] = useState<boolean>(false);
  const [navButtons, setNavButtons] = useState<NavButtonOptions[]>([
    {
      route: GlobalThemes.Resume,
    },
    {
      icon: "Themes",
      label: "Themes Page",
      contextItems: [
        {
          icon: "Projects",
          route: GlobalThemes.Enterprise,
        },
        {
          icon: "Bat",
          route: GlobalThemes.Spooky,
        },

        {
          icon: "Sales",
          route: GlobalThemes.Sales,
        },
        {
          icon: "Test",
          route: GlobalThemes.Test,
        },
        /*
        {
          icon: "Paw",
          label: "Safari Learning",
          themeChanger: GlobalThemes.Safari,
          route: "/safari",
        },
        {
          icon: "SportsEsports",
          label: "80s Arcade",
          themeChanger: GlobalThemes.Arcade,
          route: "/arcade",
        },
        {
          icon: "Skull",
          label: "Dystopia",
          themeChanger: GlobalThemes.Dystopia,
          route: "/dystopia",
        },
        */
      ],
    },
  ]);
  const setIcons = (icons: string[]) => {
    let tempButtons = navButtons;
    icons.forEach((icon, i) => {
      tempButtons[i]["icon"] = icon;
    });
    setNavButtons(tempButtons);
  };
  const getTheme = useMemo(() => {
    switch (theme) {
      case GlobalThemes.Spooky:
        setLabel("Haunted House Tours");
        setIcons(spookyNavButtons);
        break;
      case GlobalThemes.Safari:
        setLabel("Safari Learning Center");
        setIcons(safariNavButtons);
        break;
      case GlobalThemes.Arcade:
        setLabel("80s Arcade");
        setIcons(eightiesNavButtons);
        break;
      case GlobalThemes.Dystopia:
        setLabel("Dystopia");
        setIcons(dystopiaNavButtons);
        break;
      case GlobalThemes.Resume:
      case GlobalThemes.Enterprise:
      default:
        setLabel(theme);
        setIcons(defaultNavButtons);
        break;
    }
    return theme;
  }, [theme]);

  return (
    <div className={"navBar horizontal "}>
      <div
        className="headline six navBarLabel textTitle"
        style={{ display: "flex" }}
      >
        {"Portfolio - "}
        <div
          style={{ marginLeft: "8px", marginBottom: "2px" }}
          className="textSecondary headline six"
        >
          {theme}
        </div>
      </div>
      <div className={"navBarContainer " + getTheme}>
        {navButtons.map((y) => {
          return (
            <NavButton
              options={y}
              openContext={openContext}
              setOpenContext={setOpenContext}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NavBar;
