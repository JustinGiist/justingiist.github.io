import { Checkbox, FormControlLabel, InputAdornment, MenuItem, Radio, RadioGroup, Rating, Slider, Switch, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useWindowDimensions } from "../../ThemeManager";
import CarouselComponent from "../Carousel/Carousel";
import Icon from "../Icon/Icon";
import AnimatedCheckmark from "./AnimatedCheckmark/AnimatedCheckmark";
import ErrorBoundary from "./ErrorBoundary";
import { ChangeType, fallbackComponent } from "./PageLayout";
import "./SwitchInput.scss";

export enum InputTypes {
    text,
    textOnly,
    textarea,
    number,
    currency,
    select,
    multiSelect,
    map,
    button,
    link,
    checkbox,
    autoComplete,
    grid,
    calendar,
    view,
    section,
    switch,
    toggleButtonGroup,
    rating,
    slider,
    radio,
    card,
    element,
    carousel
}
export interface InputProps {
    id: string;
    type: InputTypes;
    label?: string;
    valueTo?: (item: any) => any; // A conversion function, that will take the inputted value and convert it to store into formData.
    valueFrom?: (item: any) => any; // A conversion function, that takes the value from formData[input.field] and converts it to be useable in the component.
    valueComparisonFunction?: (item: any) => string | number; // This is for validating objects, gives the validator something to validate against. Must be something that changes.
    defaultValue?: any; // When data gets initially mapped, sets an initial value. Ignored if formData already has data.
}

// InputTypes.view, InputTypes.section
export interface InputPropsView extends InputProps {
    icon?: string;
    isTitle?: boolean; // Uses titleElement, which adds classes 'partner-color section-title'
    subLabel?: string;
    inputs?: InputProps[]; // Almost Required
    className?: string;
    groupClassName?: string;
    layoutClassName?: string; // Class defines how container formats it's inputs.
    // Default 'flexColumn'. Options ['flex', 'flexColumn', 'flexFull', 'flexBlock']
}

// InputType.text,
// InputType.textArea,
// InputType.date,
// InputType.time,
// InputType.datetime
export interface InputPropsCommon extends InputProps {
    field?: string; // Required. This is used to track validationModel, errorFields, disabledFields, noPermissionFields and formData.
    placeholder?: string;
    tooltip?: string;
    isRequired?: boolean; // Adds Red '*' to the label. You should still validate for required in Joi validationModel.
    groupClassName?: string; // Applied to outer
    className?: string;
}

// InputType.bool
export interface InputPropsBool extends InputProps {
    field?: string; // Required. This is used to track validationModel, errorFields, disabledFields, noPermissionFields and formData.
    tooltip?: string;
    groupClassName?: string; // Applied to outer
    className?: string;
}

// InputType.number
export interface InputPropsNumber extends InputPropsCommon {
    min?: number;
    max?: number;
}

// InputType.numberRange
export interface InputPropsNumberRange extends InputPropsCommon {
    secondaryField: string; // Required. Same as above. Controls second field value and other triggers.
    min?: number;
    max?: number;
    secondaryMin?: number;
    secondaryMax?: number;
}

// InputType.richSelect,
// InputType.select,
// InputType.multiSelect,
// InputType.groupedMultiSelect
export interface InputPropsSelect extends InputPropsCommon {
    options: { id: string; label: string; }[]; // Required. ***RichSelect Does not use.
    optionsSource: (searchText: string) => Promise<{ id: string; label: string; }[]>; // Async. Required. ***Select does not use.
    renderOption?: (item: any) => string | JSX.Element;
    renderDisplay?: (item: any) => string | JSX.Element;
    getOptionValue?: (item: any) => any;
    allowEmpty?: boolean;
}

// InputType.mapSelect
export interface InputPropsMapSelect extends InputPropsCommon {
    options?: any[];
    optionsSource: (searchText: string) => Promise<any>;
}
// If inputs, should ONLY include buttons.
// If it does, it creates a buttonDropdown instead.
// InputType.button
export interface InputPropsButton extends InputPropsCommon {
    onClick?: (e: any) => void; // This is passed into the input on formLayout creation.
    inputs?: (InputPropsButton | InputPropsLink)[]; // For button dropdown
}
// InputType.link
export interface InputPropsLink extends InputPropsCommon {
    href?: string; // Required
}

export interface SwitchInputProps {
    index: number;
    input: any;
    formData: any;
    handleChangeReducer: any;
    errorFields: any;
    disabledFields: any;
    noPermissionFields: any;
    animate: boolean;
    validationSchema?: any;
    undoState?: any;
    handleValidation?: () => void;
    animationClass?: string;
}

const SwitchInput = ({
    input,
    index,
    handleChangeReducer,
    formData,
    noPermissionFields,
    errorFields,
    validationSchema,
    disabledFields,
    animate,
    undoState,
    handleValidation,
    animationClass
}: SwitchInputProps) => {
    // Throw on required fields. Id not required on view and section inputTypes.
    if (!input.id && input.type !== InputTypes.view && input.type !== InputTypes.section) throw new Error(`Missing id for SwitchInput input ${input.field} - ${input.label}. Inputs that are NOT inputTypes.view or inputTypes.section, must have an ID property`);

    // Switch Inputs are going to be used a lot, and maybe more later. This will reduce amount of code. Look at other <SwitchInputs> to see how this is used.
    const switchInputProps = useMemo(() => ({
        handleChangeReducer,
        formData,
        disabledFields,
        errorFields,
        validationSchema,
        noPermissionFields,
        handleValidation,
        animate,
        undoState
    }), [
        handleChangeReducer,
        formData,
        disabledFields,
        errorFields,
        validationSchema,
        noPermissionFields,
        handleValidation,
        animate,
        undoState
    ]);
    const dimensions = useWindowDimensions();
    const inputKey = `editor-type-input-${input.id}`;
    const inputTypeValueConversion = useCallback((e: any) => {
        switch(input.type) {
            case InputTypes.checkbox:
            case InputTypes.switch:
                return e.target.checked;
            default:
                return e.target.value;
        }
    }, [
        input
    ]);
    const onChange = useCallback((e: any, useSecondaryField?: boolean) => {
        let value = inputTypeValueConversion(e);
        value = input.valueTo ? input.valueTo(value) : value;
        if (input.min !== undefined) value = value < input.min ? input.min : value;
        if (input.max !== undefined) value = value > input.max ? input.max : value;
        const resultField = useSecondaryField && input.secondaryField ? input.secondaryField : input.field; // This is if we have a input that can handle two values, we can give it a secondaryField to input into. See inputTypes.numberRange
        handleChangeReducer(ChangeType.formChange, resultField, value);
    }, [
        input, 
        handleChangeReducer,
        inputTypeValueConversion
    ]);

    const label = useMemo(() => (
        <div className={`switch-input-label flex noWrap ${input.labelProps?.className ?? 'text-sub-headline'}`} style={input.labelProps?.style}>
            {input.icon && <Icon icon={input.icon} />}
            {input.label && <h3>{input.label}</h3>}
        </div>
    ), [input]);
    
    // Memoized value. Uses formData and input.field to retrieve.
    const value = useMemo(() => {
        let newValue = formData[input.field];
        if (input.valueFrom) newValue = input.valueFrom(newValue); // valueFrom is a conversion property used to convert what formData sends the input, and converts it so the input can handle it correctly.
        return newValue;
    }, [
        formData,
        input
    ]);

    // Checks if the input itself has changes.
    const hasChanges = useMemo(() => {
        if (undoState && input && input.field) {
            let originalValue = undoState[input.field];
            let newValue = value;
            if (input.valueFrom) {
                originalValue = input.valueFrom(originalValue); // Must keep conversions consistent.
            }
            if (input.valueComparisonFunction) {
                // valueComparisonFunction is a helper property, used to allow validation to compare object values. Otherwise they won't show changes.
                // if you have a value that is an object like { value: 'textValue' }, then your valueComparisonFunction would be (item) => item.value
                originalValue = input.valueComparisonFunction(originalValue);
                newValue = input.valueComparisonFunction(newValue);
            }
            return originalValue !== newValue;
        }
        return false;
    }, [
        undoState,
        input,
        value
    ]);

    // Any commmon classes that belong to all inputs will be put here. This is typical css hooks that you want to affect multiple layers down.
    const additionalClasses = useMemo(() => `${input.groupClassName} ${(hasChanges) ? 'has-new-value' : ''} ${input.isRequired ? 'required' : ''}`, [
        hasChanges,
        input.isRequired,
        input.groupClassName
    ]);

    // Memoized messages and booleans. This controls how the user sees the input and what messages appear on the tooltips.
    const disabledMessage = useMemo(() => (!disabledFields ? undefined : disabledFields[input.field]), [input, disabledFields]); // string value, changes the tooltip and disabled the field.
    const errorMessage = useMemo(() => (!errorFields ? undefined : errorFields[input.field]), [input, errorFields]); // string value, changes the tooltip and errors the field.
    const noPermission = useMemo(() => (!noPermissionFields ? undefined : noPermissionFields[input.field]), [input, noPermissionFields]); // boolean value, if true, field will not even render. (Never let css control visibility, only jsx)
    const memoizedTooltip= useMemo(() => dimensions.isMobile ? '' : errorMessage ?? disabledMessage ?? input.tooltip, [errorMessage, disabledMessage, input.tooltip]);

    const inputElement = useMemo(() => {
        // Sets defaults, we should change this later to be on the inputs themselves. Waste of code.
        const renderOption = input.renderOption ?? ((item: any) => item && item.label);
        const renderInputValue = input.renderOption ?? ((item: any) => item && item.label);
        const getOptionValue = input.getOptionValue ?? ((item: any) => item && (item.id ?? item.value ?? item));
        const renderDisplay = input.renderDisplay ?? ((item: any) => item && item.label);

        switch (input.type) {
            case InputTypes.carousel:
                return (
                    <CarouselComponent id={input.id} items={input.items} />
                )
            case InputTypes.textOnly:
                return (
                    <div
                    style={input.style}
                    className={`${additionalClasses}`}
                    >
                        {label}
                    </div>
                );
            case InputTypes.link:
                return (
                    <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={input.href}
                    style={input.style}
                    className={`link ${additionalClasses}`}
                    >
                        {label}
                    </a>
                );
            case InputTypes.button:
                return (
                    <button 
                        type="button" 
                        className={`button ${input.className} ${additionalClasses}`} 
                        onClick={input.onClick}
                        data-tip={memoizedTooltip}
                    >
                        {label}
                    </button>
                );
            case InputTypes.radio:
                return (
                    <>
                        {input.label && <div className="text-input-label">{input.label}</div>}
                        <RadioGroup
                            defaultValue={input.options && input.options[0].value}
                            name={input.id}
                        >
                            {input.options && input.options.map((item: any) => (
                                <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                            ))}
                        </RadioGroup>
                    </>
                );
            case InputTypes.slider:
                return (
                    <>
                        {input.label && <div className="text-input-label">{input.label}</div>}
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            value={value}
                            onChange={(e) => onChange(e)}
                        />
                    </>
                );
            case InputTypes.rating:
                return (
                    <>
                        {input.label && <div className="text-input-label">{input.label}</div>}
                        <Rating
                            name={input.id}
                            value={value}
                            onChange={(e) => onChange(e)}
                        />
                    </>
                );
            case InputTypes.toggleButtonGroup:
                return (
                    <ToggleButtonGroup
                        value={value}
                        exclusive
                        onChange={onChange}
                        aria-label="text alignment"
                        >
                            {input.options && input.options.map((button: InputPropsButton | InputPropsLink) => {
                                if (!button.label) throw new Error('Button had no label');
                                return (
                                    <ToggleButton key={button.label} value={button.label}>
                                        {button.label}
                                    </ToggleButton>
                                )
                            })}
                    </ToggleButtonGroup>
                )
            case InputTypes.select: 
                return (
                    <TextField
                        select
                        onChange={onChange}
                        label={input.label}
                        value={value}
                        type={'number'}
                        variant="filled"
                        disabled={!!disabledMessage}
                        helperText={memoizedTooltip}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        { ...input.inputProps }
                        error={!!!!errorMessage}
                    >
                        {input.options && input.options.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                )
            case InputTypes.currency:
                return (
                    <TextField
                        onChange={onChange}
                        label={input.label}
                        value={value}
                        type={'number'}
                        variant="filled"
                        disabled={!!disabledMessage}
                        helperText={memoizedTooltip}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        error={!!errorMessage}
                        { ...input.inputProps }
                    />
                );
            case InputTypes.number:
                return (
                    <TextField
                        onChange={onChange}
                        label={input.label}
                        InputProps={{ inputProps: { min: input.min, max: input.max } }}
                        value={value}
                        type={'number'}
                        variant="filled"
                        disabled={!!disabledMessage}
                        helperText={memoizedTooltip}
                        error={!!errorMessage}
                        { ...input.inputProps }
                    />
                );
            case InputTypes.switch:
            case InputTypes.checkbox:
                const boolProps = {
                    checked: value,
                    onChange: onChange,
                    disabled: !!disabledMessage
                };
                const boolElement = input.type === InputTypes.switch ? (
                    <Switch
                        { ...boolProps }
                    />
                ) : (
                    <Checkbox
                        { ...boolProps }
                    />
                );
                return (
                    <FormControlLabel 
                        disabled={!!disabledMessage} 
                        control={boolElement} 
                        label={input.label} 
                    />
                );
            case InputTypes.textarea:
            case InputTypes.text:
                const isTextArea = input.type === InputTypes.textarea;
                return (
                    <TextField
                        onChange={onChange}
                        label={input.label}
                        value={value}
                        error={!!errorMessage}
                        variant="filled"
                        { ...input.inputProps }
                        disabled={!!disabledMessage}
                        multiline={isTextArea}
                        minRows={isTextArea ? 2 : 1}
                        maxRows={4}
                        style={input.style}
                        helperText={memoizedTooltip}
                    />
                );
            default:
                return input.label;
                
        }
    }, [
        disabledMessage, 
        input, 
        onChange, 
        value,
        dimensions.isMobile,
        errorMessage,
        memoizedTooltip,
        additionalClasses,
        label
    ]);

    // Creates and animated checkmark or X depending on various properties.
    const floatingElement = useMemo(() => hasChanges && (
        <div className="float-right-top"><AnimatedCheckmark tooltip={errorMessage ? 'Has an error!' : 'Has new changes!'} useCancel={errorMessage} /></div>
    ), [
        hasChanges,
        errorMessage
    ]);
    if (noPermission) return null;
    const animatedStyle = {
        animationDelay: `${index * 0.1}s`,
        ...input.style
    };
    switch (input.type) {
        case InputTypes.view:
        case InputTypes.card:
        case InputTypes.element:
            return (
                <div 
                    id={input.id} 
                    className={`flexColumn ${input.className} ${InputTypes[input.type].toString()} ${animationClass}`} 
                    style={animatedStyle}
                    data-walkthrough-step={input["data-walkthrough-step"]}
                    data-walkthrough-label={input["data-walkthrough-label"]}
                    data-walkthrough-description={input["data-walkthrough-description"]}
        
                >
                    {label}
                    {input.subLabel && <div className="text-body">{input.subLabel}</div>}
                    <div className={input.layoutClassName ?? 'flexColumn'}>
                        {input.type === InputTypes.element && input.element}
                        {input.type !== InputTypes.element && input.inputs && input.inputs.map((child: any, i: number) => (
                            <SwitchInput
                                key={`child-switch-input-${child.id}`}
                                index={i}
                                input={child}
                                { ...switchInputProps }
                            />
                        ))}
                    </div>
                </div>
            );
        default:
            return (
                <ErrorBoundary
                    key={inputKey}
                    fallback={fallbackComponent(input)}
                >
                    <div 
                        id={input.id}
                        className={`switch-input ${!!disabledMessage ? 'Mui-disabled' : ''} ${!!errorMessage ? 'Mui-error' : ''}`} data-tip={memoizedTooltip}>
                        {floatingElement}
                        {inputElement}
                    </div>
                </ErrorBoundary>
            );                
    }
}
export default SwitchInput;