import React, { useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    isCard?: boolean;
    noMobile?: boolean;
    gap?: number;
    children: any;
}
const BlockLayout = ({
    layoutClass,
    isCard,
    noMobile,
    gap,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const memoParams = useMemo(() => ({
        ...rest,
        style: {
            ...rest?.style,
            gap: gap
        },
        className: `${layoutClass ?? 'flex-block'} ${rest?.className ?? ''} ${isCard ? 'card' : ''} ${noMobile ? 'noMobile' : ''}`
    }), [
        rest,
        layoutClass,
        isCard
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default BlockLayout;
