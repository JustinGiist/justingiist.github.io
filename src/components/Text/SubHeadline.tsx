import React from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    children: any;
}
const SubHeadline = ({
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `text-sub-headline subHeadlineMedium ${rest?.className ?? ''}`
    });
    return <div {...innerParams}>{children}</div>;
};
export default SubHeadline;
