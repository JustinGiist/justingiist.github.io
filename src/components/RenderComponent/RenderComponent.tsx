import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useContext } from "react";
import { ThemeManagerContext } from "../../App";
import EnterpriseTheme from "../../pages/ThemeSwitcher/EnterpriseTheme/EnterpriseTheme";
import SpookyTheme from "../../pages/ThemeSwitcher/SpookyTheme";
import { GlobalThemes, useWindowDimensions } from "../../ThemeManager";
import "./RenderComponent.scss";
import ResumePage from "../../pages/ThemeSwitcher/ResumePage/ResumePage";
import OverlayControl from "../OverlayControl/OverlayControl";
import ContactPage from "../../pages/ThemeSwitcher/ContactPage/ContactPage";
import SideBar from "../SideBar/SideBar";
import SalesTheme from "../../pages/ThemeSwitcher/SalesTheme/SalesTheme";
import DesignBackground from "../BezierBackground/DesignBackground";
import TestPage from "../../pages/testPage";
import FragmentsPage from "../../pages/ThemeSwitcher/FragmentsPage/FragmentsPage";
import SidebarV2 from "../SidebarV2/SidebarV2";
import TopbarV2 from "../TopbarV2/TopbarV2";
import EditorPage from "../../pages/ThemeSwitcher/EditorPage/EditorPage";
import BlackRed from "../../pages/ThemeSwitcher/BlackRed/BlackRed";
import ReactTooltip from "react-tooltip";
import MusicPage from "../../pages/ThemeSwitcher/MusicPage/MusicPage";
import NotePage from "../../pages/ThemeSwitcher/NotePage/NotePage";
const RenderComponent = ({ url }: { url: GlobalThemes }) => {
  const { theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const dimensions = useWindowDimensions();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  let isTopBar = false;
  const routes = useMemo(() => new Map<string, any>([
    [GlobalThemes.Resume, <ResumePage />],
    [GlobalThemes.Contact, <ContactPage />],
    [GlobalThemes.Sales, <SalesTheme />],
    [GlobalThemes.Enterprise, <EnterpriseTheme />],
    [GlobalThemes.Spooky, <SpookyTheme />],
    [GlobalThemes.Editor, <EditorPage />],
    [GlobalThemes.Test, <TestPage />],
    [GlobalThemes.BlackRed, <BlackRed />],
    [GlobalThemes.Music, <MusicPage />],
    [GlobalThemes.Fragments, <FragmentsPage />],
    [GlobalThemes.List, <NotePage />]
  ]), []);
  const newPage = useMemo(() => routes.get(url), [routes, url]);
  const checkBackground = () => {
    switch (url) {
      case GlobalThemes.Resume:
      case GlobalThemes.Contact:
      case GlobalThemes.Projects:
        return false;
      default:
        return false;
    }
  };
  const checkSideBar = () => {
    switch (url) {
      case GlobalThemes.Enterprise:
        return true;
      default:
        return false;
    }
  };
  const handleMobileOpen = useCallback(() => {
    setIsMobileOpen(!isMobileOpen)
  }, [setIsMobileOpen, isMobileOpen]);
  const showBackground = checkBackground();
  const showSideBar = checkSideBar();
  useEffect(() => {
    setThemeContext(url);
  });
  const memoizedTopBar = useMemo(() => <TopbarV2 route={url} handleMobileOpen={handleMobileOpen} isMobileOpen={isMobileOpen}/>, [url, handleMobileOpen, isMobileOpen]);
  return (
    <>
      {showBackground && <DesignBackground />}
      <div id="animationOverlay" className={`animationOverlay ${theme}`}></div>
      <div
        className={`renderContainer ${isTopBar ? " horizontal " : " "} ${theme}`}
      >
        <div className="leftContainer">
          <SidebarV2 setIsMobileOpen={setIsMobileOpen} routes={routes} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobileOpen={isMobileOpen}/>
        </div>
        <div className="rightContainer">
          {!dimensions.isMobile && memoizedTopBar}
          {showSideBar && <SideBar gooMenu={url === GlobalThemes.Enterprise} />}
          <CalculatedScrollComponent className={"mainContent " + url} hasButtons={false} refresh={[]} sidebarCollapsed={isCollapsed}>
            {!newPage ? <OverlayControl /> : newPage}
          </CalculatedScrollComponent>
          {dimensions.isMobile && memoizedTopBar}
        </div>
      </div>
    </>
  );
};
export default RenderComponent;
export const CalculatedScrollComponent = (props: {
  children: any;
  hasButtons: boolean;
  refresh: any[];
  overflowHidden?: boolean;
  sidebarCollapsed: boolean;
  className?: string;
}) => {
  const dimensions = useWindowDimensions();
  const resizeRef = useRef<any>(null);
  const buttonSpacing = useRef<number>(0);
  const resizeChildrenContainer = useCallback(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (resizeRef && resizeRef.current) {
      resizeRef.current.style.height = window.innerHeight + 'px';
      let width = window.innerWidth;
      if (!dimensions.isMobile) {
        width = width - (props.sidebarCollapsed ? 48 : 200);
      }
      resizeRef.current.style.width = width + 'px';
    }
  }, [
    dimensions.isMobile,
    props.sidebarCollapsed
  ]);
  const initialResize = useCallback((firstCall?: boolean) => {
    if (resizeRef.current) {
      resizeChildrenContainer();
      if (firstCall) {
        setTimeout(() => {
          initialResize();
        }, 500);
      }
    } else {
      setTimeout(() => {
        initialResize();
      }, 500);
    }
  }, [
    resizeChildrenContainer
  ]);
  useEffect(() => {
    window.addEventListener("resize", resizeChildrenContainer);
    resizeChildrenContainer();
    initialResize(true);
    return () => {
      window.removeEventListener("resize", resizeChildrenContainer);
    };
  }, [
    initialResize,
    resizeChildrenContainer
  ]);
  useEffect(() => {
    buttonSpacing.current = props.hasButtons ? 72 : 0;
  }, [props.hasButtons]);
  useEffect(() => {
    resizeChildrenContainer();
  }, [
    resizeRef, 
    props.refresh, 
    props.sidebarCollapsed, 
    dimensions,
    resizeChildrenContainer
  ]);
  
  return (
    <div
      ref={resizeRef}
      id="scrollComponent"
      className={`scrollComponent ${props.className}`}
      style={{
        overflowY: props.overflowHidden ? "hidden" : "auto",
      }}
    >
      {props.children}
      <ReactTooltip
        effect='solid'
        delayShow={400}
        delayUpdate={400}
      />
    </div>
  );
};
