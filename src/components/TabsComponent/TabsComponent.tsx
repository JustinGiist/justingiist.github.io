import React, { Dispatch, SetStateAction } from 'react';
import './TabsComponent.scss';

interface TabsComponentProps {
    tabs: Array<string>,
    selectedTab: string,
    setSelectedTab: Dispatch<SetStateAction<string>>,
    className?: string
}

const TabsComponent = ({
    tabs,
    selectedTab,
    setSelectedTab,
    className
}: TabsComponentProps) => {
    return (
        <div className={`tabs ${className}`}>
            {tabs.map(page => (
                <div
                    key={page}
                    className={`tabs-item no-select ${selectedTab === page ? ' selected' : ''}`}
                    onClick={() => setSelectedTab(page)}
                    onKeyDown={() => {}}
                    tabIndex={-1}
                    role="button"
                >
                    {page}
                </div>
            ))}
        </div>
    );
};
export default TabsComponent;
