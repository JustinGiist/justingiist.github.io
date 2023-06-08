import React, { useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    isCard?: boolean;
    gap?: number;
    addSectionPadding?: boolean;
    children: any;
}
const TileLayout = ({
    layoutClass,
    isCard,
    gap,
    addSectionPadding,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const memoParams = useMemo(() => ({
        ...rest,
        style: {
            ...rest?.style,
            padding: addSectionPadding ? '12px 16px 60px' : '',
            gap: gap
        },
        className: `${layoutClass ?? 'flex-tile'} ${rest?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        rest,
        layoutClass,
        isCard
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default TileLayout;
