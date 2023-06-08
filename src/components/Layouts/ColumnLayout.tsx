import React, { useMemo } from 'react';
import { useWindowDimensions } from '../../ThemeManager';

interface InputGroupProps extends React.ComponentPropsWithoutRef<"input"> {
    layoutClass?: string;
    isCard?: boolean;
    isTile?: boolean;
    gap?: number;
    addSectionPadding?: boolean;
    children: any;
}
const ColumnLayout = ({
    layoutClass,
    isCard,
    isTile,
    gap,
    addSectionPadding,
    children,
    ...rest // This includes things like id, style, className, everything a regular component can use.
} : InputGroupProps) => {
    const dimensions = useWindowDimensions();
    const padding = useMemo(() => {
        if (addSectionPadding) {
            if (!dimensions.isMobile) {
                return '12px 16px 60px';
            }
            return '8px';
        }
        return '';
    }, [
        addSectionPadding,
        dimensions.isMobile
    ]);

    const memoParams = useMemo(() => ({
        ...rest,
        style: {
            ...rest?.style,
            padding: padding,
            gap: gap
        },
        className: `${layoutClass ?? 'flex-column'} ${rest?.className ?? ''} ${isCard ? 'card' : ''} ${isTile ? 'tile' : ''}`
    }), [
        rest,
        layoutClass,
        isCard,
        gap,
        padding,
        isTile
    ]);
    return <div {...memoParams}>{children}</div>;
};
export default ColumnLayout;
