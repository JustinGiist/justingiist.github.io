import React from 'react';
const FourSquare = ({
    component
}: any) => {
    const classes = `square ${component.commonProps?.className}`;
    return (
        <div className={classes}>
            <h2>{component.label}</h2>
            <p className="text-body bodyBold">{component.subLabel}</p>
        </div>
    );
};
export default FourSquare;