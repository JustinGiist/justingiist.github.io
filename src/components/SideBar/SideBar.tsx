import { useContext, useEffect, useState } from "react";
import "./SideBar.scss";
import sampleLogo from "../../assets/sampleLogo.png";
import Icon from "../Icon/Icon";
import { ThemeManagerContext } from "../../App";
import { GlobalThemes } from "../../ThemeManager";
interface iNavButton {
  icon: string;
  label?: string;
  link?: string;
  subButtons?: iNavButton[];
}
const SideBar = (props: { gooMenu?: boolean }) => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageIcon, setPageIcon] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const buttons: iNavButton[] = [
    {
      icon: "HomeOutline",
      label: "Option 1",
      subButtons: [
        { icon: "HomeOutline", label: "SubOption 1" },
        { icon: "AccountCircleOutline", label: "SubOption 2" },
        { icon: "WalletOutline", label: "SubOption 3" },
        { icon: "CalculatorVariantOutline", label: "SubOption 4" },
        { icon: "ToolboxOutline", label: "SubOption 5" },
      ],
    },
    {
      icon: "AccountCircleOutline",
      label: "Option 2",
      subButtons: [
        { icon: "HomeOutline", label: "SubOption 1" },
        { icon: "AccountCircleOutline", label: "SubOption 2" },
        { icon: "WalletOutline", label: "SubOption 3" },
      ],
    },
    {
      icon: "WalletOutline",
      label: "Option 3",
      subButtons: [
        { icon: "HomeOutline", label: "SubOption 1" },
        { icon: "AccountCircleOutline", label: "SubOption 2" },
      ],
    },
    {
      icon: "CalculatorVariantOutline",
      label: "Option 4",
      subButtons: [
        { icon: "HomeOutline", label: "SubOption 1" },
        { icon: "AccountCircleOutline", label: "SubOption 2" },
        { icon: "WalletOutline", label: "SubOption 3" },
        { icon: "CalculatorVariantOutline", label: "SubOption 4" },
      ],
    },
    {
      icon: "ToolboxOutline",
      label: "Option 5",
      subButtons: [
        { icon: "HomeOutline", label: "SubOption 1" },
        { icon: "AccountCircleOutline", label: "SubOption 2" },
        { icon: "WalletOutline", label: "SubOption 3" },
      ],
    },
  ];
  const [primarySelected, setPrimarySelected] = useState<
    iNavButton | undefined
  >(undefined);
  const secondaryButtons: iNavButton[] = [
    { icon: "HomeOutline", label: "SubOption 1" },
    { icon: "AccountCircleOutline", label: "SubOption 2" },
    { icon: "WalletOutline", label: "SubOption 3" },
    { icon: "CalculatorVariantOutline", label: "SubOption 4" },
    { icon: "ToolboxOutline", label: "SubOption 5" },
  ];

  const togglePrimarySelected = (newButton: iNavButton) => {
    if (!primarySelected) {
      setPrimarySelected(newButton);
    } else if (primarySelected.label === newButton.label) {
      setPrimarySelected(undefined);
    } else {
      setPrimarySelected(newButton);
    }
  };
  useEffect(() => {
    switch (theme) {
      case GlobalThemes.Spooky:
        setPageTitle("Spooky");
        setPageIcon("Skull");
        break;
      case GlobalThemes.Safari:
        setPageTitle("Safari");
        setPageIcon("Paw");
        break;
      case GlobalThemes.Arcade:
        setPageTitle("Vincent's Arcade");
        setPageIcon("Invader");
        break;
      case GlobalThemes.Dystopia:
        setPageTitle("Dystopia");
        setPageIcon("Bat");
        break;
      case GlobalThemes.Enterprise:
        setPageTitle("Artic Systems");
        setPageIcon("AcUnit");
        break;
      case GlobalThemes.Projects:
      case GlobalThemes.Contact:
      case GlobalThemes.Resume:
      case GlobalThemes.Sales:
      default:
        setPageTitle("");
        break;
    }
  }, [theme]);
  if (props.gooMenu)
    return (
      <>
        <nav className="menu">
          <input
            type="checkbox"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>

          <a href="#" className="menu-item">
            <Icon icon="HomeOutline" fontSize={40} />
          </a>
          <a href="#" className="menu-item">
            <Icon icon="AccountCircleOutline" fontSize={40} />
          </a>
          <a href="#" className="menu-item">
            <Icon icon="WalletOutline" fontSize={40} />
          </a>
          <a href="#" className="menu-item">
            <Icon icon="CalculatorVariantOutline" fontSize={40} />
          </a>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{ position: "fixed" }}
        >
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix
                in="shadow"
                mode="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                result="shadow"
              />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </>
    );
  return (
    <div className={"sideBarContainer " + (open ? " open" : " collapsed")}>
      <div
        className={"pullOutPositioner " + (open ? " flip" : "")}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 -4.76837e-07C7.5913 -4.76837e-07 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 6.78793 11.8448 7.56815 11.5433 8.2961C11.2417 9.02405 10.7998 9.68549 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 5.21207 0.155195 4.43185 0.456723 3.7039C0.758251 2.97595 1.20021 2.31451 1.75736 1.75736C2.31451 1.20021 2.97595 0.75825 3.7039 0.456722C4.43185 0.155194 5.21207 -4.76837e-07 6 -4.76837e-07V-4.76837e-07ZM6 1.2C4.72696 1.2 3.50606 1.70571 2.60589 2.60589C1.70571 3.50606 1.2 4.72696 1.2 6C1.2 7.27304 1.70571 8.49394 2.60589 9.39411C3.50606 10.2943 4.72696 10.8 6 10.8C7.27304 10.8 8.49394 10.2943 9.39411 9.39411C10.2943 8.49394 10.8 7.27304 10.8 6C10.8 4.72696 10.2943 3.50606 9.39411 2.60589C8.49394 1.70571 7.27304 1.2 6 1.2ZM4.8 9.6L8.4 6L4.8 2.4L3.96 3.24L6.72 6L3.96 8.76L4.8 9.6Z" />
        </svg>
      </div>
      <div
        className={
          "secondarySideBarContent " + (primarySelected ? " open" : " close")
        }
      >
        {primarySelected && (
          <>
            <div className="sideBarHeader">
              <h2>{primarySelected.label}</h2>
            </div>
            <hr />
            <div className="sideBarItemsContainer">
              {primarySelected.subButtons &&
                primarySelected.subButtons.map((button) => {
                  return (
                    <div key={`sub-button-${button.label}`} className={"sideNavButton "}>
                      <div className="navButtonIcon">
                        <Icon icon={button.icon} />
                      </div>
                      {button.label && (
                        <div className="navButtonLabel">{button.label}</div>
                      )}
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>

      <div className="sideBarContent">
        <div className="sideBarHeader">
          <Icon icon={pageIcon} />
          <div className={"headline " + (open ? " two" : " four")}>
            {pageTitle}
          </div>
        </div>
        <hr />
        <div className="sideBarItemsContainer">
          {buttons.map((button) => {
            return (
              <div
                key={`side-nav-button-${button.label}`}
                className={
                  "sideNavButton " +
                  (primarySelected && primarySelected.label === button.label
                    ? " selected"
                    : "")
                }
                onClick={() => {
                  togglePrimarySelected(button);
                }}
              >
                <div className="navButtonIcon">
                  <Icon icon={button.icon} />
                </div>
                {button.label && open && (
                  <div className="navButtonLabel">{button.label}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
