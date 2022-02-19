import React, {
  createRef,
  Dispatch,
  forwardRef,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeManagerContext } from "../../App";
import { GlobalThemes } from "../../ThemeManager";
import Icon from "../Icon/Icon";
import "./NavButton.scss";
import { useNavigate } from "react-router-dom";
export interface NavButtonOptions {
  icon?: string;
  label?: string;
  contextItems?: NavButtonOptions[];
  secondary?: boolean;
  route?: GlobalThemes;
}
const NavButton = ({
  options,
  openContext,
  setOpenContext,
}: {
  options: NavButtonOptions;
  openContext: boolean;
  setOpenContext: Dispatch<SetStateAction<boolean>>;
}) => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  const contextRef = createRef<any>();
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  let buttonRef = createRef<any>();
  const innerNavigate = () => {
    setOpenContext(false);
    navigate("../" + options.route, { replace: true });
  };
  var icon = theme === GlobalThemes.Safari ? "Paw" : options.icon;
  const resize = () => {
    if (options.contextItems && openContext === true) {
      var buttonRect = buttonRef.current.getBoundingClientRect();
      if (contextRef.current && buttonRect) {
        contextRef.current.style.width = buttonRect.width.toString() + "px";
        contextRef.current.style.left = buttonRect.left.toString() + "px";
        contextRef.current.style.top =
          (buttonRect.top + buttonRect.height).toString() + "px";
      }
    }
  };
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  const ContextMenu = forwardRef<any>((props, ref) => (
    <div ref={ref} className={"navButtonContextContainer slide0"}>
      {options.contextItems &&
        options.contextItems.map((item, i) => {
          item.secondary = true;
          return (
            <NavButton
              key={i}
              options={item}
              openContext={openContext}
              setOpenContext={setOpenContext}
            />
          );
        })}
    </div>
  ));
  const DefaultButton = forwardRef<any>((props, ref) => (
    <div
      ref={ref}
      className={
        " basicNavButton " +
        (options.secondary === true && " secondary") +
        (openContext && options.contextItems ? " open" : "")
      }
      onClick={() => {
        if (options.contextItems) {
          setOpenContext(!openContext);
        } else {
          innerNavigate();
        }
      }}
    >
      <div className={"navButtonLabel headline six"}>
        {options.label || options.route}
      </div>
      {options.contextItems && (
        <div
          className={"navButtonDropdownArrow " + (openContext ? "flip" : "")}
          onClick={() => {
            setOpenContext(!openContext);
          }}
        >
          <Icon icon="ArrowDropDown" color={theme} fontSize={16} />
        </div>
      )}
    </div>
  ));

  return (
    <>
      {<DefaultButton ref={buttonRef} />}
      {openContext === true && options.contextItems && (
        <ContextMenu ref={contextRef} />
      )}
    </>
  );
};
export default NavButton;
