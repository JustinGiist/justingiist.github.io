import React, { useMemo } from 'react';
import SwitchHeroComponent, { CommonProps, iHeroComponent } from './SwitchHeroComponent';
import './HeroPageLayout.scss';
export interface iHeroPageLayout {
    label?: string;
    subLabel?: string;
    commonProps?: CommonProps;
    components: iHeroComponent[];
}
interface HeroPageLayoutProps {
    heroPageLayout: iHeroPageLayout
}
const HeroPageLayout = ({
    heroPageLayout
}: HeroPageLayoutProps) => {
    const heroComponents = useMemo(() => heroPageLayout.components.map(component => {
        return (
            <SwitchHeroComponent
                heroComponent={component}
            />
        );
    }), [
        heroPageLayout
    ]);
    return (
        <div id="hero-page-layout" className='flexColumn noGap' style={heroPageLayout.commonProps?.style}>
            {heroComponents}
        </div>
    );
};
export default HeroPageLayout;