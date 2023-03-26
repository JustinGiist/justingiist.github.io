import React from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    children: any;
}
const Body = ({
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `text-body bodyMedium ${rest?.className ?? ''}`
    });
    return (
        <p {...innerParams}>{children}</p>
    );
};
export default Body;