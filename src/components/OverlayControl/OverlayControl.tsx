import { CircularProgress } from "@material-ui/core";
import { useContext } from "react";
import { ThemeManagerContext } from "../../App";

interface iOverlayControl {
  loading: boolean;
}
const OverlayControl = ({ loading }: iOverlayControl) => {
  const { themeManager, theme, setThemeContext } =
    useContext(ThemeManagerContext);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div style={{ margin: "auto" }}>
        <CircularProgress />
      </div>
    </div>
  );
};
export default OverlayControl;
