import { useCallback } from 'react';
import './SidebarV2.scss';
import Icon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useWindowDimensions } from '../../ThemeManager';

interface SidebarV2Props {
    url: string;
    routes: Map<string, any>;
    isCollapsed: boolean;
    setIsCollapsed: (v: boolean) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (v: boolean) => void;
}

const SidebarV2 = ({
    url,
    routes,
    isCollapsed,
    setIsCollapsed,
    isMobileOpen,
    setIsMobileOpen
}: SidebarV2Props) => {
    const dimensions = useWindowDimensions();
    const navigate = useNavigate();
    const routeArray = Array.from( routes ).map(([key, value]) => key).filter(key => {
        if (dimensions.isMobile) {
            return key !== 'Fragments' && key !== 'Editor' && key !== 'Test' && key !== 'List';
        }
        
        return key !== 'Editor' && key !== 'Test' && key !== 'List'; //Removing the editor for now
    });
    const innerSetSidebar = useCallback(async (newSidebarOption) => {
        const sameAsUrl = url.indexOf(newSidebarOption.toLocaleLowerCase()) !== -1;
        if (!sameAsUrl) {
            setIsMobileOpen(false);
            window.scrollTo(0,0);
            navigate(`/${newSidebarOption}`);
        }
    }, [
        navigate,
        url,
        setIsMobileOpen
    ]);
    return (
        <div
            className={`sidebar-v2 ${dimensions.isMobile ? 'mobile rounded-scroll' : ''} ${isMobileOpen ? 'mobileOpen' : ''} ${isCollapsed ? 'collapse' : ''}`}
        >
            <Icon icon={'JGLogo'} fontSize={32} viewBox={"0.056 -4.465 49.866 62.211"} />
            {routeArray && routeArray.length > 0 && routeArray.map((option: string) => (
                <div 
                key={`side-bar-button-${option}`}
                onClick={() => innerSetSidebar(option)} 
                className={"sidebar-button flex noWrap" + (option === url ? ' selected' : '')}>
                    <Icon icon={option} fontSize={20} data-tip={isCollapsed ? null : option} />
                    <h4>{option}</h4>
                </div>
            ))}
            {!dimensions.isMobile && <div className='sidebar-button pushToBottom' onClick={() => setIsCollapsed(!isCollapsed)}>
                <Icon icon={isCollapsed ? 'SidebarOpen' : 'SidebarClose'} fontSize={20}/>
            </div>}
        </div>
    )
}
export default SidebarV2;