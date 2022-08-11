import React from 'react';
import { useWindowDimensions } from '../../ThemeManager';
import Icon from '../Icon/Icon';
import './TopbarV2.scss';

interface TopbarV2Props {
    route: string;
    isMobileOpen: boolean;
    handleMobileOpen: () => void;
}

const TopbarV2 = ({
    route,
    isMobileOpen,
    handleMobileOpen
}: TopbarV2Props) => {
    const dimensions = useWindowDimensions();
    return (
        <div className={`top-bar-v2 ${dimensions.isMobile ? 'mobile' : ''}`}>
            <h5>Portfolio - {route}</h5>
            {dimensions.isMobile && (
                <div 
                    className={`top-bar-button ${isMobileOpen ? 'open' : ''}`}
                    onClick={handleMobileOpen}
                >
                    <Icon icon='Hamburger' fontSize={32}/>
                </div>
            )}
        </div>
    )
}
export default TopbarV2;