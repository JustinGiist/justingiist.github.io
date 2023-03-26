import React, { useMemo } from 'react';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    isCard?: boolean;
    children: any;
}
const BlockLayout = ({
    layoutClass,
    isCard,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const memoParams = useMemo(() => ({
        ...rest,
        className: `${layoutClass ?? 'flex-block'} ${rest?.className ?? ''} ${isCard ? 'card' : ''}`
    }), [
        rest,
        layoutClass,
        isCard
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default BlockLayout;
