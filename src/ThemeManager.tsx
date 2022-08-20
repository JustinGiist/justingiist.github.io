import { useEffect, useState } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export const mobileWidth = 1000;
export const mobileHeight = 600;
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
  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    isMobile:
      windowDimensions.width <= mobileWidth ||
      windowDimensions.height <= mobileHeight,
  };
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
  Editor = "Editor",
  Fragments = "Fragments",
  BlackRed = "BlackRed"
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
  globalStyles: any;
  globalSizes: ComponentSizingSchema = {
    fontXSmall: 12,
    fontSmall: 16,
    fontMedium: 18,
    fontLarge: 24,
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
    primary: "#ff93fa",
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
    secondary: "#5d1ca9",
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
}
export default ThemeManager;
