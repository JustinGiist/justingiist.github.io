import { Button } from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactJoyride, { BeaconRenderProps } from "react-joyride";
import Icon from "../Icon/Icon";
import Body from "../Text/Body";
import Headline from "../Text/Headline";
import SubHeadline from "../Text/SubHeadline";
import './Walkthrough.scss';

const Walkthrough: React.FC<any> = ({ children }) => {
    const [steps, setSteps] = useState<any[]>([]);
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [runWalkthrough, setRunWalkthrough] = useState<boolean>(false);

    const updateSteps = useCallback(() => {
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
                    <Headline size={4}>{label}</Headline>
                    <SubHeadline>Step: {step}</SubHeadline>
                    <Body>{description}</Body>
                </>
            );
            newSteps.push({ target: `#${target}`, content });
        });
        setSteps(newSteps);
        setStepIndex(0);
        setRunWalkthrough(true);
    }, []);

    const updateStepIndex = useCallback((props) => {
        if (props.action === 'next' && props.type === 'step:after') {
            setStepIndex(prev => prev + 1);
        } else if (props.action === 'prev' && props.type === 'step:after') {
            setStepIndex(prev => prev - 1);
        }
    }, []);

    useEffect(() => {
        setRunWalkthrough(false);
        const timeout = setTimeout(() => {
            updateSteps();
        }, 2100);
        return () => clearTimeout(timeout);
    }, [children]);

    const Beacon = useCallback((props: any) => {
        return (
            <Button
                className="ball"
                aria-label={props['aria-label']}
                onClick={props.onClick}
                data-tip={'Start Tour'}
            >
                <Icon icon="QuestionMark" />
            </Button>
        );
    }, []);
    
    return (
        <>
            {steps && steps.length > 0 && (
                <ReactJoyride
                    steps={steps}
                    stepIndex={stepIndex}
                    run={runWalkthrough}
                    continuous
                    callback={updateStepIndex}
                    beaconComponent={Beacon}
                />
            )}
            {children}
        </>
    );
};

export default Walkthrough;