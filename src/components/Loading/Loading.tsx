import React, { useEffect, useMemo, useState } from 'react';
import Icon from '../Icon/Icon';
import Headline from '../Text/Headline';
import SubHeadline from '../Text/SubHeadline';
import './Loading.scss';

const fakeLoadingTime = 200;

interface LoadingProps extends React.ComponentPropsWithoutRef<"input"> {
    icon?: string;
    label?: string;
    subLabel?: string;
    useBackground?: boolean;
    useLoadingAnimation?: number;
    small?: boolean;
};

const Loading = ({
    icon,
    label,
    subLabel,
    useBackground,
    useLoadingAnimation = 0,
    small,
    ...rest
} : LoadingProps) => {
    const loadingAnim = useMemo(() => {
        if (icon) {
            return <Icon icon={icon} className={icon} />;
        }
        switch (useLoadingAnimation) {
            case 2:
                return barLoader;
            case 1:
                const numOfCells = 4;
                const cells = [];
                for (let i = 0; i < numOfCells; i++) {
                    for (let j = 0; j < numOfCells; j++) {
                        cells.push(<div className={`cell d-${i + j}`} />)
                    }
                }
                return <div className="mosaic-loader">{cells}</div>;
            case 0: // Mosaic
            default:
                return <div className="lds-ripple"><div></div><div></div></div>;
        }
    }, [
        icon,
        useLoadingAnimation
    ]);
    return (
        <div {...rest} className={`loadingComponent ${useBackground ? 'loading-background' : ''} ${small ? 'small' : ''}`}>
            <div className="flexColumn">
                {label && <Headline size={3}>{label}</Headline>}
                {subLabel && <SubHeadline>{subLabel}</SubHeadline>}
                {loadingAnim}
            </div>
        </div>
    );
};
export default Loading;

interface FakeLoaderProps extends React.ComponentPropsWithoutRef<"input"> {
    children?: any;
}

export const FakeLoader = ({
    children,
    ...rest
}: FakeLoaderProps) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, fakeLoadingTime)
    }, []);
    return loading ? <Loading {...rest} /> : children;
};

const barLoader = (
    <div className="loader">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
        <div className="bar bar8"></div>
    </div>
)