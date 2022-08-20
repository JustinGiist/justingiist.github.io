import { Checkbox, FormControlLabel, InputAdornment, MenuItem, Radio, RadioGroup, Rating, Slider, Switch, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useCallback, useMemo } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ChangeType, fallbackComponent } from "./PageLayout";
import "./SwitchInput.scss";

export enum InputTypes {
    text,
    textarea,
    number,
    currency,
    select,
    multiSelect,
    map,
    button,
    checkbox,
    autoComplete,
    grid,
    calendar,
    view,
    switch,
    toggleButtonGroup,
    rating,
    slider,
    radio
}

export interface InputProps {
    id: string;
    type: InputTypes;
    field?: string;
    label?: string;
    subLabel?: string;
    placeholder?: string;
    tooltip?: string;
    valueTo?: (value: any) => any;
    valueFrom?: (value: any) => any;
    inputProps?: any;
    options?: { value: any, label: string }[];
    optionsSource?: (search: string) => { value: any, label: string }[];
    inputs?: InputProps[];
}
export interface SwitchInputProps {
    input: InputProps;
    pageData: any;
    handleReducerChange: any;
    errorFields: any;
    disabledFields: any;
}

const SwitchInput = ({
    input,
    pageData,
    handleReducerChange,
    errorFields,
    disabledFields
}: SwitchInputProps) => {
    let value = useMemo(() => !input.field ? null : !input.valueTo ? pageData[input.field] : input.valueTo(pageData[input.field]), [pageData, input]);
    const error = useMemo(() => !input.field ? null : errorFields[input.field], [errorFields, input]);
    const disabled = useMemo(() => !input.field ? null : disabledFields[input.field], [disabledFields, input]);
    const inputKey = `editor-type-input-${input.id}`;
    const eConversion = (e: any) => {
        switch(input.type) {
            case InputTypes.checkbox:
            case InputTypes.switch:
                return e.target.checked;
            default:
                return e.target.value;
        }
    }
    const onChange = useCallback((e: any) => {
        const value = eConversion(e);
        const resultValue = input.valueTo ? input.valueTo(value) : value;
        handleReducerChange(ChangeType.formChange, input.field, resultValue);
    }, [input, handleReducerChange]);
    if (input.valueFrom) value = input.valueFrom(value);
    const style = input.inputProps ? input.inputProps.style : null;
    const className = input.inputProps ? input.inputProps.className : null;
    const inputElement = useMemo(() => {
        switch (input.type) {
            case InputTypes.radio:
                return (
                    <>
                        {input.label && <div className="text-sub-headline">{input.label}</div>}
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            {input.options && input.options.map((item) => (
                                <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                            ))}
                        </RadioGroup>
                    </>
                );
            case InputTypes.slider:
                return (
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        value={value}
                        onChange={onChange}
                    />
                );
            case InputTypes.rating:
                return (
                    <>
                        {input.label && <div className="text-sub-headline">{input.label}</div>}
                        <Rating
                            name={input.id}
                            value={value}
                            onChange={onChange}
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
                            {input.options && input.options.map((button) => (
                                <ToggleButton value={button.value}>
                                    {button.label}
                                </ToggleButton>
                            ))}
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
                        disabled={!!disabled}
                        tooltip={disabled ?? input.tooltip}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        { ...input.inputProps }
                    >
                        {input.options && input.options.map((option) => (
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
                        disabled={!!disabled}
                        tooltip={disabled ?? input.tooltip}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        { ...input.inputProps }
                    />
                );
            case InputTypes.number:
                return (
                    <TextField
                        onChange={onChange}
                        label={input.label}
                        value={value}
                        type={'number'}
                        variant="filled"
                        disabled={!!disabled}
                        tooltip={disabled ?? input.tooltip}
                        { ...input.inputProps }
                    />
                );
            case InputTypes.switch:
                return (
                    <FormControlLabel 
                        disabled={!!disabled} 
                        control={<Switch
                            checked={value}
                            onChange={onChange}
                            disabled={!!disabled}
                        />} 
                        label={disabled ?? input.label} 
                    />
                );
            case InputTypes.checkbox:
                return (
                    <FormControlLabel 
                        disabled={!!disabled} 
                        control={<Checkbox
                            checked={value}
                            onChange={onChange}
                            disabled={!!disabled}
                        />} 
                        label={disabled ?? input.label} 
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
                        variant="filled"
                        { ... input.inputProps }
                        disabled={!!disabled}
                        multiline={isTextArea}
                        minRows={isTextArea ? 2 : 1}
                        maxRows={4}
                        tooltip={disabled ?? input.tooltip}
                    />
                );
            case InputTypes.view:
            default:
                return (
                    <div className="flexColumn" style={style}>
                        {input.label && <h3 className="text-sub-headline">{input.label}</h3>}
                        {input.subLabel && <div className="text-body">{input.subLabel}</div>}
                        <div className={className ?? 'flexColumn'}>
                            {input.inputs && input.inputs.map(child => (
                                <SwitchInput
                                    input={child}
                                    pageData={pageData}
                                    handleReducerChange={handleReducerChange}
                                    disabledFields={disabledFields}
                                    errorFields={errorFields}
                                />
                            ))}
                        </div>
                    </div>
                );
        }
    }, [pageData, disabledFields, disabled, handleReducerChange, input, onChange, value]);
    return (
        <ErrorBoundary
            key={inputKey}
            fallback={fallbackComponent(input)}
        >
            <div className="jdgd-input" data-tip={disabled ?? input.tooltip}>
                {inputElement}
            </div>
        </ErrorBoundary>
    );
}
export default SwitchInput;