import React, { useCallback, useEffect, useState } from "react";
import ReactJoyride from "react-joyride";
import Icon from "../Icon/Icon";
import SubHeadline from "../Text/SubHeadline";
import './Walkthrough.scss';

const Walkthrough: React.FC<any> = () => {
  const [steps, setSteps] = useState<any[]>([]);
  const [runWalkthrough, setRunWalkthrough] = useState<boolean>(false);

  useEffect(() => {
    const newSteps: any[] = [];
    const walkthroughNodes = document.querySelectorAll("[data-walkthrough-step]");

    walkthroughNodes.forEach((node) => {
        const target = node.getAttribute("id") || "";
        if (!target) return;
        const step = node.getAttribute("data-walkthrough-step") || "";
        const label = node.getAttribute("data-walkthrough-label") || "";
        const description = node.getAttribute("data-walkthrough-description") || "";
        const content = (
            <>
                <h2>{label}</h2>
                <SubHeadline>Step: {step}</SubHeadline>
                <p>{description}</p>
            </>
        );
        newSteps.push({ target: `#${target}`, content });
    });
    setSteps(newSteps);
  }, []);
  
  const OpenWalkthrough = useCallback(() => {
    setRunWalkthrough(true);
  }, []);
  
  return (
    <>
        {steps.length === 0 ? null : (
            <div className="jdgd-walkthrough-button">
                <button className="button circle primary" onClick={OpenWalkthrough}><Icon icon="QuestionMark" /></button>
            </div>
        )}
        <ReactJoyride
            steps={steps}
            run={runWalkthrough}
            continuous
        />
    </>
  );
};

export default Walkthrough;