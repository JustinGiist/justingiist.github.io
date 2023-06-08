import { useMemo } from "react";
import { useWindowDimensions } from "../../ThemeManager";
import AnimatedCheckmark from "../PageLayout/AnimatedCheckmark/AnimatedCheckmark";
import ErrorBoundary from "../PageLayout/ErrorBoundary";
import InputFallback from "./InputFallback";
import React from "react";
import SubHeadline from "../Text/SubHeadline";

const InputWrapper = ({ 
    formData,
    handleFormChange,
    disabledFields,
    handleDisabled,
    errorFields,
    handleErrors,
    undoState,
    noPermissionFields,
    children,
    ...rest 
}: any) => {
    const dimensions = useWindowDimensions();
        
    // Memoized value. Uses formData and rest.field to retrieve.
    const value = useMemo(() => {
        let newValue = formData[rest.field];
        if (rest.valueFrom) newValue = rest.valueFrom(newValue); // valueFrom is a conversion property used to convert what formData sends the input, and converts it so the input can handle it correctly.
        return newValue;
    }, [
        formData,
        rest
    ]);

    // Checks if the input itself has changes.
    const hasChanges = useMemo(() => {
        if (undoState && rest.field) {
            let originalValue = undoState[rest.field];
            let newValue = value;
            if (rest.valueFrom) {
                originalValue = rest.valueFrom(originalValue); // Must keep conversions consistent.
            }
            if (rest.valueComparisonFunction) {
                // valueComparisonFunction is a helper property, used to allow validation to compare object values. Otherwise they won't show changes.
                // if you have a value that is an object like { value: 'textValue' }, then your valueComparisonFunction would be (item) => item.value
                originalValue = rest.valueComparisonFunction(originalValue);
                newValue = rest.valueComparisonFunction(newValue);
            }
            return originalValue !== newValue;
        }
        return false;
    }, [
        undoState,
        value,
        rest
    ]);

    // Any commmon classes that belong to all inputs will be put here. This is typical css hooks that you want to affect multiple layers down.
    const additionalClasses = useMemo(() => `${rest.className} ${(hasChanges) ? 'has-new-value' : ''} ${rest.isRequired ? 'required' : ''}`, [
        hasChanges,
        rest
    ]);

    // Memoized messages and booleans. This controls how the user sees the input and what messages appear on the tooltips.
    const disabledMessage = useMemo(() => (!disabledFields ? undefined : disabledFields[rest.field]), [disabledFields, rest.field]); // string value, changes the tooltip and disabled the field.
    const errorMessage = useMemo(() => (!errorFields ? undefined : errorFields[rest.field]), [errorFields, rest.field]); // string value, changes the tooltip and errors the field.
    const noPermission = useMemo(() => (!noPermissionFields ? undefined : noPermissionFields[rest.field]), [noPermissionFields, rest.field]); // boolean value, if true, field will not even render. (Never let css control visibility, only jsx)
    const memoizedTooltip= useMemo(() => dimensions.isMobile ? '' : errorMessage ?? disabledMessage ?? rest.tooltip, [dimensions.isMobile, errorMessage, disabledMessage, rest.tooltip]);

    // Creates and animated checkmark or X depending on various properties.
    const floatingElement = useMemo(() => hasChanges && (
        <div className="float-right-top"><AnimatedCheckmark tooltip={errorMessage ? 'Has an error!' : 'Has new changes!'} useCancel={errorMessage} /></div>
    ), [
        hasChanges,
        errorMessage
    ]);

    if (noPermission) return null;

    const wrapperProperties = {
        onChange: (e: any) => handleFormChange(rest.field, e?.target?.value), // We need to validate values here debugger; Min Max and fire off errors and validation
        label: undefined, // We handle Label seperately and don't want it on the input child
        value: value,
        error: !!errorMessage,
        disabled: !!disabledMessage,
        helperText: memoizedTooltip,
        className: additionalClasses,
    };
    return (
        <ErrorBoundary
            fallback={<InputFallback label={rest.label} />}
        >
            <div 
                id={rest.id}
                className={`jdgd-input ${!!disabledMessage ? 'Mui-disabled' : ''} ${!!errorMessage ? 'Mui-error' : ''}`} data-tip={memoizedTooltip}
            >
                {floatingElement}
                {rest.label && <SubHeadline>{rest.label}</SubHeadline>}
                {React.Children.map(children, (child) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        ...rest,
                        ...wrapperProperties
                    })
                )}
            </div>
        </ErrorBoundary>
    );
}
export default InputWrapper;