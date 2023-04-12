import React from 'react';
import stringUtils from '../../utils/stringUtils';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    truncate?: boolean;
    truncateNumber?: number;
    children: any;
}
const Body = ({
    truncate,
    truncateNumber,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `text-body bodyMedium ${rest?.className ?? ''} ${truncate ? 'truncate' : ''}`
    });
    if (!(typeof children === "string") && truncateNumber) throw new Error('Children must be string with truncateNumber');
    const render = truncateNumber ? stringUtils.truncate(children, truncateNumber) : children;
    return (
        <p {...innerParams}>{render}</p>
    );
};
export default Body;