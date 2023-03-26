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
    ...params // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const memoParams = useMemo(() => ({
        ...params,
        style: {
            ...params?.style,
            gap: gap
        },
        className: `${layoutClass ?? 'flex-column'} ${params?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        params,
        layoutClass,
        isCard
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default ColumnLayout;
