import { useState } from "react";
import Icon from "../Icon/Icon";
import "./TutorialControl.scss";
const TutorialControl = ({}: {}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="tutorialControl">
        <Icon icon="QuestionMark" />
        <div className="tutorialTextContainer">
          <h2>Tutorial?</h2>
        </div>
      </div>
      <div className="modal" style={{ display: "none" }}>
        <div className="modalContent"></div>
      </div>
    </>
  );
};
export default TutorialControl;
