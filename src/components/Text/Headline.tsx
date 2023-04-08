import React from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    size?: number;
    secondary?: boolean;
    truncate?: boolean;
    children: any;
}
const Headline = ({
    size, // number 1 - 5
    secondary,
    truncate,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const innerParams = ({
        ...rest,
        className: `${secondary ? 'text-headline-secondary' : 'text-headline'} ${rest?.className ?? ''} ${truncate ? 'truncate' : ''}`
    });
    switch (size) {
        case 2:
            return <h2 {...innerParams}>{children}</h2>;
        case 3:
            return <h3 {...innerParams}>{children}</h3>;
        case 4:
            return <h4 {...innerParams}>{children}</h4>;
        case 5:
            return <h5 {...innerParams}>{children}</h5>;
        case 1:
        default:
            return <h1 {...innerParams}>{children}</h1>;
    }
};
export default Headline;
