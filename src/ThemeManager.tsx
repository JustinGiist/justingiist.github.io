import { useEffect, useState } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
export interface componentSchema {
  //Primaries
  primary: string;
  secondary: string;
  teritary: string;
  //Backgrounds
  primaryBackground: string;
  secondaryBackground: string;
  primaryBackgroundTransparent: string;
  secondaryBackgroundTransparent: string;
  //Text Colors
  textTitle: string;
  textPrimary: string;
  textSecondary: string;
  textTeritary: string;
  textPlaceholder: string;
  //Statuses
  error: string;
  success: string;
  warning: string;
  info: string;
  //Buttons
  primaryButton: string;
  primaryButtonText: string;
  secondaryButton: string;
  secondaryButtonText: string;
  successButton: string;
  successButtonText: string;
  cancelButton: string;
  cancelButtonText: string;
  deleteButton: string;
  deleteButtonText: string;
  disabledButton: string;
  disabledButtonText: string;
  //Others
  shadowLight: string;
  shadowDark: string;
  border: string;
  font: string;
}
export interface colorSchema {
  white: string;
  black: string;
  blueDark: string;
  blueNormal: string;
  blueLight: string;
  blueLighter: string;
  redDarker: string;
  redDark: string;
  redNormal: string;
  redLight: string;
  redLighter: string;
  yellowDark: string;
  yellowNormal: string;
  yellowLight: string;
  orangeDark: string;
  orangeMedium: string;
  orangeLight: string;
  greenDark: string;
  greenNormal: string;
  greenLight: string;
  greenLighter: string;
  darkDark: string;
  darkNormal: string;
  darkLight: string;
  lightDark: string;
  lightNormal: string;
  lightLight: string;
  purpleDarker: string;
  purpleDark: string;
  purpleNormal: string;
  purpleLight: string;
  purpleLighter: string;
  greyDarker: string;
  greyDark: string;
  greyNormal: string;
  greyLight: string;
  greyLighter: string;
  background: string;
  logoLight: string;
  logoDark: string;
  backgroundTransparent: string;
  secondaryBackgroundTransparent: string;
  fontXSmall: number;
  fontSmall: number;
  fontMedium: number;
  fontLarge: number;
  fontXLarge: number;
  radiusSmall: number;
  radiusMedium: number;
  radiusLarge: number;
  greenShadow: string;
  shadow: string;
  darkGreyShadow: string;
  borderLight: string;
  font: string;
  shadowLight: string;
  shadowDark: string;
}
export enum GlobalThemes {
  Resume = "Resume",
  Projects = "Projects",
  Contact = "Contact",
  Safari = "Safari",
  Spooky = "Spooky",
  Dystopia = "Dystopia",
  Enterprise = "Enterprise",
  Arcade = "Arcade",
  Sales = "Sales",
  Test = "Test",
}
export interface ComponentSizingSchema {
  fontXSmall: number;
  fontSmall: number;
  fontMedium: number;
  fontLarge: number;
  fontXLarge: number;
  radiusSmall: number;
  radiusMedium: number;
  radiusLarge: number;
  font: string;
}
class ThemeManager {
  isMobile: boolean;
  phoneHeight: number;
  phoneWidth: number;
  currentTheme: componentSchema;
  globalComponentThemes: Map<string, componentSchema>;
  globalStyles: any;
  themeName: GlobalThemes;
  previousThemeName: GlobalThemes;
  globalSizes: ComponentSizingSchema = {
    fontXSmall: 12,
    fontSmall: 20,
    fontMedium: 24,
    fontLarge: 32,
    fontXLarge: 48,
    radiusSmall: 4,
    radiusMedium: 8,
    radiusLarge: 12,
    font: `'Poppins', sans-serif`,
  };
  globalColors: colorSchema = {
    white: "#ffffff",
    black: "#333",
    blueDark: "#3568d4",
    blueNormal: "#03adfc",
    blueLight: "#52a5ff",
    blueLighter: "#abfbff",
    redDarker: "#4f0c0f",
    redDark: "#81151a",
    redNormal: "#cc1b24",
    redLight: "#e8666d",
    redLighter: "#edbbbe",
    yellowDark: "#ffcc00",
    yellowNormal: "#fddd48",
    yellowLight: "#fded72",
    greenDark: "#06c270",
    greenNormal: "#39d98a",
    greenLight: "#57eba1",
    greenLighter: "#b5fbd8",
    orangeDark: "#bf7008",
    orangeMedium: "#fc9003",
    orangeLight: "#f7ae4d",
    darkDark: "#1C1C26",
    darkNormal: "#262637",
    darkLight: "#8f90a6",
    borderLight: "#cccccc",
    lightDark: "#ebebf0",
    lightNormal: "#f2f2f5",
    logoDark: "#05A660",
    logoLight: "#3CE792",
    lightLight: "#fafafc",
    purpleDarker: "#371e3b",
    purpleDark: "#49284f",
    purpleNormal: "#b13ac7",
    purpleLight: "#de91eb",
    purpleLighter: "#eec9f5",
    greyDarker: "rgba(16, 17, 20, .9)",
    greyDark: "rgba(46, 49, 56, .8)",
    greyNormal: "rgba(61,68,78,.8)",
    greyLight: "#b5b5b5",
    greyLighter: "#e8e8e8",
    background: "#FFFFFF",
    backgroundTransparent: "rgba(255, 255, 255, 0.7)",
    secondaryBackgroundTransparent: "rgba(222, 222, 255, 0.7)",
    fontXSmall: 8,
    fontSmall: 12,
    fontMedium: 16,
    fontLarge: 24,
    fontXLarge: 32,
    radiusSmall: 4,
    radiusMedium: 8,
    radiusLarge: 12,
    greenShadow:
      "0px 0px 2px rgba(87, 235, 161, 0.4), 0px 4px 8px rgba(87, 235, 161, 0.5);",
    shadow:
      "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);",
    darkGreyShadow:
      "0px 0px 2px rgba(16, 17, 20, 0.08), 0px 4px 8px rgba(16, 17, 20, 0.32);",
    font: `'Nightscary Free Trial', sans-serif`,
    shadowLight:
      "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);",
    shadowDark:
      "0px 0px 2px rgba(40, 41, 61, 0.12), 0px 4px 8px rgba(96, 97, 112, 0.32);",
  };
  dystopiaComponentTheme: componentSchema = {
    //Primaries
    primary: this.globalColors.redNormal,
    secondary: this.globalColors.redDark,
    teritary: this.globalColors.redLight,
    //Backgrounds
    primaryBackground: this.globalColors.redDark,
    secondaryBackground: this.globalColors.redDarker,
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent:
      this.globalColors.secondaryBackgroundTransparent,
    //Text Colors
    textTitle: this.globalColors.redLight,
    textPrimary: this.globalColors.lightNormal,
    textSecondary: this.globalColors.lightDark,
    textTeritary: this.globalColors.lightDark,
    textPlaceholder: this.globalColors.lightLight,
    //Buttons
    primaryButton: "#333",
    primaryButtonText: this.globalColors.white,
    secondaryButton: this.globalColors.redDark,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.darkNormal,
    font: "'Poppins', sans-serif",
  };
  spookyComponentTheme: componentSchema = {
    //Primaries
    primary: "#900aa8",
    secondary: "#4f194b",
    teritary: "#ad11a0",
    //Backgrounds
    primaryBackground: "#eec9f5",
    secondaryBackground: "#260a24",
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent: "rgba(23, 6, 26, .9)",
    //Text Colors
    textTitle: this.globalColors.white,
    textPrimary: this.globalColors.purpleLighter,
    textSecondary: this.globalColors.purpleLight,
    textTeritary: this.globalColors.lightDark,
    textPlaceholder: this.globalColors.lightLight,
    //Buttons
    primaryButton: this.globalColors.white,
    primaryButtonText: this.globalColors.darkDark,
    secondaryButton: this.globalColors.purpleLight,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.darkNormal,
    font: "'Poppins', sans-serif",
  };
  enterpriseComponentTheme: componentSchema = {
    //Primaries
    primary: this.globalColors.blueNormal,
    secondary: this.globalColors.blueDark,
    teritary: "#00d8e3",
    //Backgrounds
    primaryBackground: this.globalColors.white,
    secondaryBackground: this.globalColors.greyLighter,
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent:
      this.globalColors.secondaryBackgroundTransparent,
    //Text Colors
    textTitle: this.globalColors.blueNormal,
    textPrimary: "#00d8e3",
    textSecondary: this.globalColors.darkNormal,
    textTeritary: this.globalColors.blueLight,
    textPlaceholder: this.globalColors.greyLight,
    //Buttons
    primaryButton: this.globalColors.blueDark,
    primaryButtonText: this.globalColors.white,
    secondaryButton: this.globalColors.blueNormal,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.greyLighter,
    font: "'Poppins', sans-serif",
  };
  arcadeComponentTheme: componentSchema = {
    //Primaries
    primary: this.globalColors.redNormal,
    secondary: this.globalColors.redDark,
    teritary: this.globalColors.redLight,
    //Backgrounds
    primaryBackground: this.globalColors.redDark,
    secondaryBackground: this.globalColors.redDarker,
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent:
      this.globalColors.secondaryBackgroundTransparent,
    //Text Colors
    textTitle: this.globalColors.redLight,
    textPrimary: this.globalColors.lightNormal,
    textSecondary: this.globalColors.lightDark,
    textTeritary: this.globalColors.lightDark,
    textPlaceholder: this.globalColors.lightLight,
    //Buttons
    primaryButton: "#333",
    primaryButtonText: this.globalColors.white,
    secondaryButton: this.globalColors.redDark,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.darkNormal,
    font: "'Poppins', sans-serif",
  };
  safariComponentTheme: componentSchema = {
    //Primaries
    primary: this.globalColors.redNormal,
    secondary: this.globalColors.redDark,
    teritary: this.globalColors.redLight,
    //Backgrounds
    primaryBackground: this.globalColors.redDark,
    secondaryBackground: this.globalColors.redDarker,
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent:
      this.globalColors.secondaryBackgroundTransparent,
    //Text Colors
    textTitle: this.globalColors.redLight,
    textPrimary: this.globalColors.lightNormal,
    textSecondary: this.globalColors.lightDark,
    textTeritary: this.globalColors.lightDark,
    textPlaceholder: this.globalColors.lightLight,
    //Buttons
    primaryButton: "#333",
    primaryButtonText: this.globalColors.white,
    secondaryButton: this.globalColors.redDark,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.darkNormal,
    font: "'Poppins', sans-serif",
  };
  salesComponentTheme: componentSchema = {
    //Primaries
    primary: "#ffd5fd",
    secondary: "#59cdff",
    teritary: "#b0fbff",
    //Backgrounds
    primaryBackground: this.globalColors.white,
    secondaryBackground: "#ffedff",
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent:
      this.globalColors.secondaryBackgroundTransparent,
    //Text Colors
    textTitle: "#976b2b",
    textPrimary: "#d12584",
    textSecondary: this.globalColors.darkNormal,
    textTeritary: "#b0fbff",
    textPlaceholder: this.globalColors.greyLight,
    //Buttons
    primaryButton: this.globalColors.blueDark,
    primaryButtonText: this.globalColors.white,
    secondaryButton: this.globalColors.blueNormal,
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.greyLighter,
    font: "'Poppins', sans-serif",
  };
  mainComponentTheme: componentSchema = {
    //Primaries
    primary: this.globalColors.redNormal,
    secondary: this.globalColors.redDark,
    teritary: "#9f8ffb",
    //Backgrounds
    primaryBackground: this.globalColors.white,
    secondaryBackground: "#5d1ca9",
    primaryBackgroundTransparent: this.globalColors.backgroundTransparent,
    secondaryBackgroundTransparent: "#3b17cb",
    //Text Colors
    textTitle: "#5d1ca9",
    textPrimary: "#9f8ffb",
    textSecondary: this.globalColors.purpleLight,
    textTeritary: "#6714CF",
    textPlaceholder: this.globalColors.lightLight,
    //Buttons
    primaryButton: "#6714CF",
    primaryButtonText: this.globalColors.white,
    secondaryButton: "#5d1ca9",
    secondaryButtonText: this.globalColors.white,
    successButton: this.globalColors.greenDark,
    successButtonText: this.globalColors.white,
    cancelButton: this.globalColors.greenDark,
    cancelButtonText: this.globalColors.greenDark,
    deleteButton: this.globalColors.greenDark,
    deleteButtonText: this.globalColors.greenDark,
    disabledButton: this.globalColors.greenDark,
    disabledButtonText: this.globalColors.greenDark,
    //Statuses
    error: this.globalColors.redNormal,
    success: this.globalColors.greenNormal,
    warning: this.globalColors.yellowNormal,
    info: this.globalColors.blueNormal,
    //Other
    shadowLight: this.globalColors.shadowLight,
    shadowDark: this.globalColors.shadowDark,
    border: this.globalColors.darkNormal,
    font: "'Poppins', sans-serif",
  };
  constructor() {
    this.globalComponentThemes = new Map<string, componentSchema>()
      .set(GlobalThemes.Dystopia, this.dystopiaComponentTheme)
      .set(GlobalThemes.Spooky, this.spookyComponentTheme)
      .set(GlobalThemes.Enterprise, this.enterpriseComponentTheme)
      .set(GlobalThemes.Arcade, this.arcadeComponentTheme)
      .set(GlobalThemes.Safari, this.safariComponentTheme)
      .set(GlobalThemes.Resume, this.mainComponentTheme)
      .set(GlobalThemes.Contact, this.mainComponentTheme)
      .set(GlobalThemes.Projects, this.mainComponentTheme)
      .set(GlobalThemes.Sales, this.salesComponentTheme);

    this.phoneHeight = window.innerHeight;
    this.phoneWidth = window.innerWidth;
    this.isMobile = this.checkMobile();
    this.currentTheme = this.mainComponentTheme; //This is to silence needing an initializer
    this.themeName = GlobalThemes.Resume;
    this.previousThemeName = GlobalThemes.Arcade;
    this.setTheme(GlobalThemes.Resume); /// This is where you set the Theme
  }
  checkMobile = () => {
    if (typeof document != "undefined") {
      return false;
    } else if (
      typeof navigator != "undefined" &&
      navigator.product == "ReactNative"
    ) {
      return true;
    }
    return false;
  };

  setTheme = (theme: GlobalThemes) => {
    this.themeName = theme;
    this.currentTheme =
      this.globalComponentThemes.get(theme) ?? this.dystopiaComponentTheme;

    document.body.classList.remove(
      GlobalThemes.Enterprise,
      GlobalThemes.Spooky,
      GlobalThemes.Safari,
      GlobalThemes.Arcade,
      GlobalThemes.Dystopia,
      GlobalThemes.Contact,
      GlobalThemes.Projects,
      GlobalThemes.Resume,
      GlobalThemes.Sales
    );
    document.body.classList.add(theme);

    //var sheet = window.document.styleSheets[0];
    //sheet.insertRule(this.getCssTheme(theme), sheet.cssRules.length);
    this.setCssOnDocument(theme);
  };
  setCssOnDocument = (theme: GlobalThemes) => {
    let style = document.getElementById("Theme");
    if (theme != this.previousThemeName) {
      this.previousThemeName = theme;
      if (style != null) {
        document.head.removeChild(
          style
          //document.head.childNodes[document.head.childNodes.length - 1]
        );
        style = document.createElement("style");
        style.id = "Theme";
        document.head.appendChild(style);
      }
      if (!style) {
        style = document.createElement("style");
        style.id = "Theme";
        document.head.appendChild(style);
      }
      style.innerHTML = "";
      style.appendChild(
        document.createTextNode(":root{" + this.getCssTheme(theme) + "}")
      );
      let controlStyle = document.getElementById("ControlTheme");
      if (controlStyle != null) {
        document.head.removeChild(controlStyle);
      }
      controlStyle = document.createElement("style");
      controlStyle.id = "ControlTheme";
      let head = document.head || document.getElementsByTagName("head")[0];

      head.appendChild(controlStyle);
      controlStyle.appendChild(
        document.createTextNode(this.getCssControlClasses())
      );
    }
  };
  getCssControlClasses = () => {
    return `.headline {
        letter-spacing: 0;
        font-weight: 500;
        transition: all .167s ease-in-out;
      }
      .headline.one{
        font-size: var(--font-xlarge);
        font-weight: 700;
      }
      .headline.two{
        font-size: var(--font-large);
        font-weight: 600;
      }
      .headline.three{
        font-size: var(--font-large);
      }
      .headline.four{
        font-size: var(--font-medium);
      }
      .headline.five{
        font-size: var(--font-medium);
        font-weight: 400;
      }
      .headline.six{
        font-size: var(--font-small);
        font-weight: 400;
      }
      .headline.seven{
        font-size: var(--font-small);
        font-weight: 300;
      }
      .headline.eight{
        font-size: var(--font-xsmall);
        font-weight: 800;
      }
      .paragraph{
        font-size: var(--font-medium);
      }
      .inputName{
        font-size: var(--font-medium);
      }
      .link{
        font-size: var(--font-medium);
        color: var(--theme-teritary);
      }
      .link:hover{
        cursor: pointer;
      }
      .textTitle{
        color: var(--theme-text-title) !important;
      }
      .textPrimary{
        color: var(--theme-text-primary) !important;
      }
      .textSecondary{
        color: var(--theme-text-secondary) !important;
      }
      .textTeritary{
        color: var(--theme-text-teritary) !important;
      }
      .textPlaceholder {
        color: var(--theme-text-placeholder) !important;
      }
      .button{
        font-size: var(--font-medium);
        padding: 4px 24px;
        border-radius: var(--round-medium);
        transition: all 0.167s ease-in-out;
        max-width: 320px;
        height: 60px;
      }
      .button:hover{
        cursor: pointer;
      }
      .button.primary {
        background-color: var(--theme-button-primary);
        color: var(--theme-button-primary-text);
        border: 1px solid var(--theme-med-contrast);
      }
      .button.primary:hover{
        background-color: var(--theme-button-primary-text);
        color: var(--theme-button-primary);
        border: 1px solid var(--theme-button-primary-text);
      }
      .button.transparent {
        background-color:transparent;
        border: none;
      }
      .button.transparent:hover{
        border: 1px solid var(--theme-button-secondary-text);
      }
      .button.secondary {
        background-color: var(--theme-button-secondary);
        color: var(--theme-button-secondary-text);
        border: 1px solid var(--theme-button-secondary-text);
      }
      .button.secondary:hover{
        background-color: var(--theme-button-secondary-text);
        color: var(--theme-button-secondary);
      }
      .button.secondaryAccent{
        background-color: var(--theme-button-secondary-accent);
        color: var(--theme-button-secondary-accent-text);
        border: 1px solid var(--theme-button-secondary-accent);
      }
      .button.secondaryAccent:hover{
        background-color: var(--theme-button-secondary-accent-text);
        color: var(--theme-button-secondary-accent);
      }
      .button.success {
        background-color: var(--theme-button-success);
        color: var(--theme-button-success-text);
        border: 1px solid var(--theme-button-success-text);
      }
      .button.success:hover{
        background-color: var(--theme-button-success-text);
        color: var(--theme-button-success);
      }
      .button.warning {
        background-color: var(--theme-button-warning);
        color: var(--theme-button-warning-text);
        border: 2px solid var(--theme-button-warning-text);
      }
      .button.warning:hover{
        background-color: var(--theme-button-warning-text);
        color: var(--theme-button-warning);
      }
      .button.disabled {
        background-color: var(--theme-button-disabled);
        color: var(--theme-button-disabled-text);
      }
      .button.disabled:hover{
        background-color: var(--theme-button-disabled-text);
        color: var(--theme-button-disabled);
      }
      .error {
        color: var(--theme-error);
      }
      .success {
        color: var(--theme-success);
      }
      .warning {
        color: var(--theme-warning);
      }
      .info {
        color: var(--theme-info);
      }
      .hidden {
        display: none !important;
      }`;
  };
  getCssTheme = (theme: GlobalThemes) => {
    return (
      `--width:` +
      (this.phoneWidth ? this.phoneWidth.toString() : `1000`) +
      `px;` +
      `--theme: ` +
      theme.toString() +
      `;` +
      `--theme-primary:` +
      this.currentTheme.primary +
      ";" +
      `--theme-secondary:` +
      this.currentTheme.secondary +
      ";" +
      `--theme-teritary:` +
      this.currentTheme.teritary +
      ";" +
      `--theme-border:` +
      this.currentTheme.border +
      ";" +
      `--theme-text-title:` +
      this.currentTheme.textTitle +
      ";" +
      `--theme-text-primary:` +
      this.currentTheme.textPrimary +
      ";" +
      `--theme-text-secondary:` +
      this.currentTheme.textSecondary +
      ";" +
      `--theme-text-teritary:` +
      this.currentTheme.textTeritary +
      ";" +
      `--theme-text-placeholder:` +
      this.currentTheme.textPlaceholder +
      ";" +
      `--theme-error:` +
      this.currentTheme.error +
      ";" +
      `--theme-success:` +
      this.currentTheme.success +
      ";" +
      `--theme-warning:` +
      this.currentTheme.warning +
      ";" +
      `--theme-info:` +
      this.currentTheme.info +
      ";" +
      `--theme-primary-background:` +
      this.currentTheme.primaryBackground +
      ";" +
      `--theme-secondary-background:` +
      this.currentTheme.secondaryBackground +
      ";" +
      `--theme-primary-background-transparent:` +
      this.currentTheme.primaryBackgroundTransparent +
      ";" +
      `--theme-secondary-background-transparent: ` +
      this.currentTheme.secondaryBackgroundTransparent +
      ";" +
      `--theme-button-primary:` +
      this.currentTheme.primaryButton +
      ";" +
      `--theme-button-primary-text:` +
      this.currentTheme.primaryButtonText +
      ";" +
      `--theme-button-secondary:` +
      this.currentTheme.secondaryButton +
      ";" +
      `--theme-button-secondary-text:` +
      this.currentTheme.secondaryButtonText +
      ";" +
      `--theme-button-success:` +
      this.currentTheme.successButton +
      ";" +
      `--theme-button-success-text:` +
      this.currentTheme.successButtonText +
      ";" +
      `--theme-button-cancel:` +
      this.currentTheme.cancelButton +
      ";" +
      `--theme-button-cancel-text:` +
      this.currentTheme.cancelButtonText +
      ";" +
      `--theme-button-delete:` +
      this.currentTheme.deleteButton +
      ";" +
      `--theme-button-delete-text:` +
      this.currentTheme.deleteButtonText +
      ";" +
      `--theme-button-disabled:` +
      this.currentTheme.disabledButton +
      ";" +
      `--theme-button-disabled-text:` +
      this.currentTheme.disabledButtonText +
      ";" +
      `--theme-white:` +
      this.globalColors.white +
      ";" +
      `--theme-black:` +
      this.globalColors.black +
      ";" +
      `--theme-shadow-light:` +
      this.currentTheme.shadowLight +
      ";" +
      `--theme-shadow-dark:` +
      this.currentTheme.shadowDark +
      ";" +
      `--font-xsmall:` +
      this.globalSizes.fontXSmall +
      `px;
      --font-small:` +
      this.globalSizes.fontSmall +
      `px;
      --font-medium:` +
      this.globalSizes.fontMedium +
      `px;
      --font-large:` +
      this.globalSizes.fontLarge +
      `px;
      --font-xlarge:` +
      this.globalSizes.fontXLarge +
      `px;
    
      --round-small:` +
      this.globalSizes.radiusSmall +
      `px;
      --round-medium:` +
      this.globalSizes.radiusMedium +
      `px;
      --round-large:` +
      this.globalSizes.radiusLarge +
      `px;
      --font:` +
      this.currentTheme.font +
      `;`
    );
  };
}
export default ThemeManager;
