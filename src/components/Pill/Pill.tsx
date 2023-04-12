import React, {
    useMemo,
    useState,
    useCallback
} from 'react';
import './Pill.scss';
import Icon from '../Icon/Icon';

const Pill = ({
    id,
    index,
    style,
    className,
    label,
    tooltip,
    isSelected,
    enableIcons,
    enableCheckMark,
    icon,
    onClick, // You should pass the data in the onClick, don't make this manage data. This control should be stateless.
    children
}: any) => {
    if (!id) throw new Error('Missing id for pill');
    const [isHover, setIsHover] = useState(false);
    const memoSelected = useMemo(() => {
        if (isSelected === undefined) return true; // Return true because we want background to be filled in normally. Enabled - Background Filled w/ Pill Color, Disabled - Background White
        return isSelected;
    }, [
        isSelected
    ]);
    const handleIsHover = useCallback((e, value) => {
        e.stopPropagation();
        e.preventDefault();
        setIsHover(value);
    }, []);
    const onHover = useCallback((e) => {
        handleIsHover(e, true);
    }, [handleIsHover]);
    const onOut = useCallback((e) => {
        handleIsHover(e, false);
    }, [handleIsHover]);
    // index % 4 because we are only using the first 4 Misc colors for ease of reading. See Color-Variables.scss Misc-0 Color to see colors.
    const memoizedClassName = useMemo(() => `pill pill-${typeof index === 'number' ? index % 10 : ''} ${className} ${isHover && memoSelected && enableIcons ? 'error' : ''} ${memoSelected ? 'pillSelected' : 'pillUnselected'}`, [
        className,
        index,
        memoSelected,
        isHover,
        enableIcons
    ]);
    const memoizedIcon = useMemo(() => {
        if (!icon && (!memoSelected || !enableIcons)) return null;
        let result = icon ?? undefined;
        if (!result) {
            if (enableCheckMark) {
                result = 'Check';
            }
            if (isHover) {
                result = 'X';
            }
        }
        if (!result) return null;
        return <Icon key={`pill-icon-${id}`} fontSize={16} width={'12px'} height={'12px'} icon={result} />;
    }, [
        enableCheckMark,
        isHover,
        memoSelected,
        id,
        enableIcons,
        icon
    ]);
    return (
        <button
            key={id}
            id={id}
            className={memoizedClassName}
            style={style}
            data-tip={tooltip}
            type="button"
            onClick={onClick}
            onMouseOver={onHover}
            onFocus={onHover}
            onMouseOut={onOut}
            onBlur={onOut}
        >
            {memoizedIcon}
            {label && <div className="pill-label">{label}</div>}
            {children}
        </button>
    );
};
export default Pill;
