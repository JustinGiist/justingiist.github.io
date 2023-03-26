import React, { ForwardedRef, forwardRef, Ref, useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    noWrapping?: boolean;
    isCard?: boolean;
    children: any;
}
const RowLayout = forwardRef<any, InputGroupProps>((props, ref) => {
    const {
        layoutClass,
        noWrapping,
        isCard,
        children,
        ...params // This includes things like id, style, className, everything a regular component can use.
    } = props;
    const memoParams = useMemo(() => ({
        ...params,
        className: `${layoutClass ?? 'flex'} ${!noWrapping ? '' : 'noWrap'} ${params?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        params,
        layoutClass,
        noWrapping,
        isCard
    ]);
    return <div ref={ref} {...memoParams}>{children}</div>;
});
export default RowLayout;
