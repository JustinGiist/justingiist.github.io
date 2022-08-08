import React, { useEffect, useState } from 'react';
import './SidebarV2.scss';
import Icon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@mui/icons-material';
import { useWindowDimensions } from '../../ThemeManager';

interface SidebarV2Props {
    routes: Map<string, any>;
    isCollapsed: boolean;
    setIsCollapsed: (v: boolean) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (v: boolean) => void;
}

const SidebarV2 = ({
    routes,
    isCollapsed,
    setIsCollapsed,
    isMobileOpen,
    setIsMobileOpen
}: SidebarV2Props) => {
    const dimensions = useWindowDimensions();
    const navigate = useNavigate();
    const [selectedSideBar, setSelectedSidebar] = useState('Resume');
    const routeArray = Array.from( routes ).map(([key, value]) => key).filter(key => {
        if (dimensions.isMobile) {
            return key !== 'Fragments' && key !== 'Editor';
        }
        return key;
    });
    useEffect(() => {
        const sameAsUrl = window.location.href.toLocaleLowerCase().indexOf(selectedSideBar.toLocaleLowerCase()) !== -1;
        if (!sameAsUrl) {
            setIsMobileOpen(false);
            navigate(`/${selectedSideBar}`);
        }
    }, [selectedSideBar])
    return (
        <div
            className={`sidebar-v2 ${dimensions.isMobile ? 'mobile' : ''} ${isMobileOpen ? 'mobileOpen' : ''} ${isCollapsed ? 'collapse' : ''}`}
        >
            <Icon icon={'JGLogo'} fontSize={32} viewBox={"0.056 -4.465 49.866 62.211"} />
            {routeArray && routeArray.length > 0 && routeArray.map((option: string) => (
                <div 
                key={`side-bar-button-${option}`}
                onClick={() => setSelectedSidebar(option)} 
                className={"tprc-sidebar-button flex noWrap" + (option === selectedSideBar ? ' selected' : '')}>
                        <Icon icon={option} fontSize={20} data-tip={isCollapsed ? null : option} />
                    <h4>{option}</h4>
                </div>
            ))}
            <div className='tprc-sidebar-button pushToBottom' onClick={() => setIsCollapsed(!isCollapsed)}>
                <Icon icon={isCollapsed ? 'SidebarOpen' : 'SidebarClose'} fontSize={20}/>
            </div>
        </div>
    )
}
export default SidebarV2;