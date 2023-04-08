import React from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    truncate?: boolean;
    children: any;
}
const SubHeadline = ({
    truncate,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `text-sub-headline subHeadlineMedium ${rest?.className ?? ''} ${truncate ? 'truncate' : ''}`
    });
    return <div {...innerParams}>{children}</div>;
};
export default SubHeadline;
