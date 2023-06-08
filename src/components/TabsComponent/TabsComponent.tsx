import React, { Dispatch, SetStateAction } from 'react';
import './TabsComponent.scss';

interface TabsComponentProps {
    tabs: Array<string>,
    selectedTab: string,
    setSelectedTab: Dispatch<SetStateAction<string>>,
    renderCallback?: (tabKey: string) => any,
    className?: string
}

const TabsComponent = ({
    tabs,
    selectedTab,
    setSelectedTab,
    renderCallback,
    ...rest
}: TabsComponentProps) => {
    return (
        <div className={`tabs rounded-scroll ${rest?.className}`}>
            <div className="tabs-scroller">
                {tabs.map(page => (
                    <div
                        key={page}
                        className={`tabs-item no-select ${selectedTab === page ? ' selected' : ''}`}
                        onClick={() => setSelectedTab(page)}
                        onKeyDown={() => {}}
                        tabIndex={-1}
                        role="button"
                    >
                        {!renderCallback ? page : renderCallback(page)}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TabsComponent;


