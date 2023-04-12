import { Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import Icon from '../Icon/Icon';
export interface CommonProps {
    className?: string;
    style?: any;
    layoutClassName?: string;
}
export interface IconProps extends CommonProps {
    icon?: string;
}
export interface iHeroComponent {
    id: string;
    type?: string;
    commonProps?: CommonProps;
    iconProps?: IconProps;
    label?: string;
    subLabel?: string;
    body?: string;
    onClick?: () => void;
    components?: iHeroComponent[];
}
interface SwitchHeroComponentProps {
    heroComponent: iHeroComponent;
}
const SwitchHeroComponent = ({
    heroComponent
}: SwitchHeroComponentProps) => {
    const styles = useMemo(() => ({
        ...heroComponent.commonProps?.style
    }), [
        heroComponent.commonProps?.style
    ]);
    const containerClasses = useMemo(() => `${heroComponent.type ?? 'text'} ${heroComponent.commonProps?.className} flexColumn`, [heroComponent]);
    const switchComponent = useMemo(() => {
        switch(heroComponent.type) {
            case 'button':
                return (
                    <button 
                        type="button" 
                        className={`button`} 
                        onClick={heroComponent.onClick}
                    >
                        {heroComponent.label}
                    </button>
                );
            case 'four-square':
                return heroComponent.components?.map(component => {
                    const classes = `square ${component.commonProps?.className}`;
                    return (
                        <div key={component.id} className={classes}>
                            <h2>{component.label}</h2>
                            <p className="text-body bodyBold">{component.subLabel}</p>
                        </div>
                    )
                });
            case 'slide-row-component':
                if (!heroComponent.components) return null;
                return (
                    <>
                        <div className="slide-row flexSB">
                            <div />
                            <SwitchHeroComponent heroComponent={heroComponent.components[0]}/>
                        </div>  
                        <div className="slide-row flexSB">
                            <SwitchHeroComponent heroComponent={heroComponent.components[1]}/>
                            <div />
                        </div>  
                    </>
                );
            case 'left-text-right-image-component':
                if (!heroComponent.components || heroComponent.components.length !== 4) return null;
                return (
                    <div className={heroComponent?.commonProps?.layoutClassName ?? 'flex noWrap'}>
                        <div className="left-text">
                            <SwitchHeroComponent heroComponent={heroComponent.components[0]}/>
                        </div>
                        <div className="right-image">
                            <SwitchHeroComponent heroComponent={heroComponent.components[1]}/>
                            <SwitchHeroComponent heroComponent={heroComponent.components[2]}/>
                            <SwitchHeroComponent heroComponent={heroComponent.components[3]}/>
                        </div>
                    </div>
                );
            case 'text':
                return (
                    <>
                        {heroComponent.subLabel && <h5>{heroComponent.subLabel}</h5>}
                        {heroComponent.label && <h2>{heroComponent.label}</h2>}
                        {heroComponent.body && <div className="text-body bodyMedium">{heroComponent.body}</div>}
                        {heroComponent.components && heroComponent.components.length > 0 && <SwitchHeroComponent heroComponent={heroComponent.components[0]}/>}
                    </>
                );
            case 'container':
            default:
                return (
                    <>
                        {heroComponent.iconProps && heroComponent.iconProps.icon && (
                            <Icon 
                                icon={heroComponent.iconProps.icon} 
                                className={heroComponent.iconProps.className}
                            />
                        )}
                        {heroComponent.subLabel && <h5>{heroComponent.subLabel}</h5>}
                        {heroComponent.label && <h2>{heroComponent.label}</h2>}
                        {heroComponent.body && <div className="text-body">{heroComponent.body}</div>}
                        <div className={heroComponent?.commonProps?.layoutClassName ?? 'flexColumn'}>
                            {heroComponent.components && heroComponent.components.length > 0 && heroComponent.components.map(component => (
                                <SwitchHeroComponent key={component.id} heroComponent={component}/>
                            ))} 
                        </div>
                    </>
                );
        }
    }, [
        heroComponent
    ]);
    return (
        <div 
            id={heroComponent.id} 
            className={containerClasses} 
            style={styles}
            onClick={heroComponent.onClick}
        >
            {switchComponent}
        </div>
    );
};
export default SwitchHeroComponent;
