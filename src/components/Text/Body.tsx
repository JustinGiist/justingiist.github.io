import React from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    truncate?: boolean;
    children: any;
}
const Body = ({
    truncate,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `text-body bodyMedium ${rest?.className ?? ''} ${truncate ? 'truncate' : ''}`
    });
    return (
        <p {...innerParams}>{children}</p>
    );
};
export default Body;