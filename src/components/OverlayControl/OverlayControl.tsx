import { CircularProgress } from "@material-ui/core";

const OverlayControl = () => {
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
