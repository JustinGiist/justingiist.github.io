import React, { useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    isCard?: boolean;
    gap?: number;
    children: any;
}
const ColumnLayout = ({
    layoutClass,
    isCard,
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
        className: `${layoutClass ?? 'flex-column'} ${rest?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        rest,
        layoutClass,
        isCard
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default ColumnLayout;
