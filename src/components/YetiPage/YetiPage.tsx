import React, { useCallback, useMemo, useState } from 'react';
import { useWindowDimensions } from '../../ThemeManager';
import PageLayout, { iPageLayout } from '../PageLayout/PageLayout';
import { InputTypes } from '../PageLayout/SwitchInput';
import './YetiPage.scss';

const YetiPage = () => {
    const dimensions = useWindowDimensions();
    const [isSnowing, setIsSnowing] = useState(true);
    const handleSnowing = useCallback(() => {
        setIsSnowing(!isSnowing);
    }, [isSnowing]);
    const yetiPageLayout: iPageLayout = useMemo(() => ({
        id: 'yeti-page-layout',
        labelProps: {
            label: [
                <TreesSvg isMobile={dimensions.isMobile} />,
                <div className="flexColumn">
                    <h1>Yeti Walk</h1>
                    <h4>Yeti Walk is an ongoing Global Movement to get explorers connected with the latest and greatest Frozen Travel Destinations</h4>
                </div>
            ]
        },
        actions: [
            {
                id: 'snow-button',
                icon: isSnowing ? 'Yeti' : 'YetiOff',
                tooltip: isSnowing ? 'Turn Snow Off' : 'Turn Snow On',
                onClick: handleSnowing,
                type: InputTypes.button,
                className: 'option'
            }
        ],
        inputs: [
            {
                id: 'yeti-main-content',
                type: InputTypes.view,
                className: 'card',
                label: 'Yeti Walk',
                layoutClassName: 'flex-block',
                inputs: [
                    {
                        id: 'news',
                        type: InputTypes.view,
                        className: 'card flat background-secondary',
                        label: 'News'
                    },
                    {
                        id: 'locations',
                        type: InputTypes.view,
                        className: 'card flat background-secondary',
                        label: 'Locations'
                    },
                    {
                        id: 'events',
                        type: InputTypes.view,
                        className: 'card flat background-secondary',
                        label: 'Events'
                    },
                    {
                        id: 'partners',
                        type: InputTypes.view,
                        className: 'card flat background-secondary',
                        label: 'Partners'
                    }
                ]
            }
        ],

    }), [
        dimensions.isMobile,
        handleSnowing,
        isSnowing
    ]);
    return (
        <div id="yeti-page">
            {isSnowing && snowFlakes}
            <PageLayout pageLayout={yetiPageLayout} />
        </div>
    )
};
export default YetiPage;

const TreesSvg = ({ isMobile }: { isMobile?: boolean }) => {
    const width = 'min-content'; // !isMobile ? 235 : 100;
    const height = 'min-content'; // !isMobile ? 300 : 100;
    return (
        <svg id="yeti-trees" viewBox="25.452 10.873 378.394 480" width={width} height={height}>
            <rect x="66.742" y="367.081" width="29.412" height="134.615" ></rect>
            <rect x="124.434" y="308.258" width="14.706" height="199.661" ></rect>
            <rect x="195.136" y="350.679" width="37.896" height="158.371" ></rect>
            <rect x="274.321" y="324.661" width="27.149" height="184.389" ></rect>
            <rect x="360.294" y="357.466" width="15.271" height="152.715" ></rect>
            <path d="M 128.393 33.497 L 187.217 317.999 L 69.57 317.999 L 128.393 33.497 Z" data-bx-shape="triangle 69.57 33.497 117.647 284.502 0.5 0 1@b726e678" ></path>
            <path d="M 275.17 10.873 L 357.466 341.755 L 192.873 341.755 L 275.17 10.873 Z" data-bx-shape="triangle 192.873 10.873 164.593 330.882 0.5 0 1@19a50b59" ></path>
            <path d="M 369.061 47.072 L 403.846 367.208 L 334.276 367.208 L 369.061 47.072 Z" data-bx-shape="triangle 334.276 47.072 69.57 320.136 0.5 0 1@1d822834" ></path>
            <path d="M 83.427 131.317 L 141.402 379.62 L 25.452 379.62 L 83.427 131.317 Z" data-bx-shape="triangle 25.452 131.317 115.95 248.303 0.5 0 1@9137fea0" ></path>
            <path d="M 217.195 99.109 L 298.077 368.905 L 136.312 368.905 L 217.195 99.109 Z" data-bx-shape="triangle 136.312 99.109 161.765 269.796 0.5 0 1@b737fe91" ></path>
        </svg>
    );
}
const snowFlakes = Array.apply(null, Array(100)).map(item => <div className="snowflake" />);