import React, { ForwardedRef, forwardRef, Ref, useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    noWrapping?: boolean;
    isCard?: boolean;
    gap?: number;
    children: any;
}
const RowLayout = forwardRef<any, InputGroupProps>((props, ref) => {
    const {
        layoutClass,
        noWrapping,
        isCard,
        gap,
        children,
        ...rest // This includes things like id, style, className, everything a regular component can use.
    } = props;
    const memoParams = useMemo(() => ({
        ...rest,
        style: {
            ...rest?.style,
            gap: gap
        },
        className: `${layoutClass ?? 'flex'} ${!noWrapping ? '' : 'noWrap'} ${rest?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        rest,
        layoutClass,
        noWrapping,
        isCard
    ]);
    return <div ref={ref} {...memoParams}>{children}</div>;
});
export default RowLayout;
