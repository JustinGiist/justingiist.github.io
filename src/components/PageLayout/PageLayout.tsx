import { CircularProgress } from "@material-ui/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { quickHash } from "../../utils/objectUtils";
import Icon from "../Icon/Icon";
import StopNavigation from "./StopNavigation";
import SwitchInput, { InputPropsButton, InputPropsLink, InputTypes } from "./SwitchInput";
import UndoRedoComponent from "./UndoRedoComponent";
export interface iCommonProps {
    className?: string;
    layoutClassName?: string;
    style?: any;
}
export interface iLabelProps extends iCommonProps {
    label?: string | Element | Element[] | JSX.Element[] | JSX.Element;
    subLabel?: string;
    icon?: string;
}
export interface iPageLayout {
    id: string;
    labelProps?: iLabelProps;
    containerProps?: iCommonProps;
    contentProps?: iCommonProps;
    animationClass?: string;
    inputs: any[];
    actions?: InputPropsButton[] | InputPropsLink[];
    disableHeaderFeature?: boolean;
    disableCancelFeature?: boolean;
    disableSaveFeature?: boolean;
    enableUndoRedoFeature?: boolean;
}
export interface PageLayoutProps {
    pageLayout: iPageLayout;
    formData?: any;
    handleFormData?: any;
    errorFields?: any;
    noPermissionFields?: any;
    disabledFields?: any;
    handleError?: any;
    handleDisabled?: any;
    handleNoPermission?: any;
    undoState?: any;
    validationSchema?: any;
    handleSubmit?: (evt: any) => void;
    handleCancel?: () => void;
}

export enum ChangeType {
    formChange,
    errorChange,
    disabledChange,
    noPermissionChange,
    undo,
    redo
}

export const objectChange = (prev: any, field: string, newValue: any) => {
    return {
        ...prev,
        [field]: newValue
    };
};

// This is a recursive function that searches through the formLayout model that you provide and pulls out all the fields into a single layer object. Sets initial State or ''
const checkThroughInputsForFieldsRecursive = (inputs: any[], formData: any) => {
    let result: any = {};
    inputs.forEach((input) => {
        if (input.field) {
            let defaultValue = input.defaultValue ?? '';
            if (input.type === InputTypes.checkbox) { // Make sure bools come in as the correct value type.
                defaultValue = input.defaultValue ?? false;
            }
            result[input.field] = formData[input.field] ?? defaultValue;
        }
        if (input.inputs) {
            result = {
                ...result,
                ...checkThroughInputsForFieldsRecursive(input.inputs, formData)
            };
        }
    });
    return result;
};

// This takes in the formLayout model and maps everything with a 'field' to a single layer object. Also maps any data passed in, but only goes 1 layer deep right now.
export const mapInitialFormData = (formLayout: iPageLayout, formData: any) => checkThroughInputsForFieldsRecursive(formLayout.inputs ?? [], formData);

const PageLayout = ({
    pageLayout, // Required.
    formData = {}, // Required. A populated object using the mapInitialFormData function, should be passed in already mapped with the formLayout and any initial Data. This fixes the uncontrolled-controlled component bug for react.
    handleFormData, // Required.
    handleSubmit,
    noPermissionFields,
    disabledFields = {},
    handleDisabled,
    handleCancel,
    validationSchema
}: PageLayoutProps) => {
    const [animate, setAnimate] = useState<boolean>(true);
    const [undoState] = useState(formData); // FormData should already be mapped using mapInitialFormData function, there for this is the initial state.
    const [redoState, setRedoState] = useState(null);
    const [errorFields, setErrorFields] = useState({}); // The fields that are in error. Populated by the input.field and a string message. See handleValidation() for an example.

    useEffect(() => { // Fires the animation only once
        if (animate) {
            setTimeout(() => {
                setAnimate(false);
            }, 2000);
        }
    }, [animate]);

    // Handles validation for the FormLayout, also sets errorFields to display Joi error Messages.
    const handleValidation = useCallback(() => {
        if (!validationSchema) return false; // If no validationSchema is given, return false (NO ERRORS)
        const errors = {} // validationUtils.validate(validationSchema, formData, false); // Checks validation schema
        setErrorFields(errors || {}); // applies any errors found, or empty {} if errors is false.
        return !!errors; // Returns if errors exist or not.
    }, [
        formData,
        setErrorFields,
        validationSchema
    ]);

    // This handles the initial submitting functionality, before calling the handleSubmit function that was passed in. This is to validate before calling submit function.
    // If handleSubmit is null. Save button does not appear, this will never be called.
    const innerHandleSubmit = useCallback((evt) => {
        let hasErrors = false;
        if (validationSchema) hasErrors = handleValidation();
        if (hasErrors) return;
        if (handleSubmit) handleSubmit(evt); // Fires handleSubmit, no need to null check this.
    }, [
        validationSchema,
        handleSubmit,
        handleValidation
    ]);

    // This is a reducer to handle various input types the user, or the formLayout component itself, can make. If you need different funcitionality, add a new ChangeType enum.
    const handleChangeReducer = useCallback((changeType, field, newValue) => {
        switch (changeType) {
            case ChangeType.undo:
                setRedoState(formData); // Sets current state, as Redo State, so that user can re-apply changes they made.
                handleFormData(undoState); // Sets Undo State, as current state, undoing recent changes.
                break;
            case ChangeType.redo:
                handleFormData(redoState); // Sets Redo State, as current state, re-applying recent changes.
                setRedoState(null); // Nulls redo state, to keep state consistent. Disable Redo Button.
                break;
            case ChangeType.formChange:
                handleFormData((prev: any) => objectChange(prev, field, newValue));
                break;
            case ChangeType.disabledChange:
                handleDisabled((prev: any) => objectChange(prev, field, newValue));
                break;
            case ChangeType.errorChange:
                setErrorFields(prev => objectChange(prev, field, newValue));
                break;
            default:
                break;
        }
    }, [
        handleDisabled,
        setErrorFields,
        handleFormData,
        formData,
        redoState,
        undoState
    ]);

    const hasError = useMemo(() => Object.keys(errorFields).length > 0, [errorFields]);

    // Checks to see if there are changes between the initial State (undoState) and formData.
    const hasChanges = useMemo(() => {
        const oldHash = quickHash(undoState); // Original State of the data, hashed.
        const currentHash = quickHash(formData); // Current State of the data, hashed.
        const hashesAreNotEqual = oldHash !== currentHash;
        if (hashesAreNotEqual) {
            setRedoState(null); // Nulls the redo state when changes have been applied. This is to keep state consistent.
        }
        if (hashesAreNotEqual || hasError) {
            handleValidation();
        }
        return hashesAreNotEqual;
    }, [
        formData,
        undoState,
        handleValidation,
        hasError
    ]);

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
        undoState,
        animationClass: pageLayout.animationClass
    }), [
        handleChangeReducer,
        formData,
        disabledFields,
        errorFields,
        validationSchema,
        noPermissionFields,
        handleValidation,
        animate,
        undoState,
        pageLayout.animationClass
    ]);

    const header = useMemo(() => {
        if (!pageLayout) return null;
        if (pageLayout.disableHeaderFeature) return null;
        // If all header properties are 'undefined' and disableHeaderFeature is not set, then it doesn't render either.
        if (
            (pageLayout.disableCancelFeature || !handleCancel) && 
            (pageLayout.disableSaveFeature || !handleSubmit) && 
            !pageLayout.enableUndoRedoFeature && 
            !pageLayout.labelProps && 
            !pageLayout.actions
        ) return null;
        // A Iconized title component that follows our typical styling and partner-coloring. Icon cannot be shown without label.
        const labelClasses = `flex noWrap ${pageLayout.labelProps?.className ?? 'headline two'}`;
        const labelElement = pageLayout.labelProps?.label && (
            <div className={labelClasses}>
                {pageLayout.labelProps?.icon && <i className={`fa fa-${pageLayout.labelProps?.icon} iconBoxed`} />}
                {pageLayout.labelProps?.label}
            </div>
        );

        // A small section for body text, that can describe a page. Following text-body coloring
        const subLabelElement = pageLayout.labelProps?.subLabel && (
            <div className="text-body no-select">
                {pageLayout.labelProps?.subLabel}
            </div>
        );

        // This consolidates the actions provided in formLayout, into a single button, unless there is only 1 action.
        const actionsButtonOptions = {
            id: 'actions-button',
            type: InputTypes.button,
            label: 'Actions',
            inputs: pageLayout.actions
        };
        const turnActionButtonsAreaOff = !pageLayout.enableUndoRedoFeature && !handleCancel && !handleSubmit && !pageLayout.actions;
        const classes = `${pageLayout.labelProps?.layoutClassName ?? 'flexColumn'} ${animate ? 'animate' : 'noAnimate'} ${pageLayout.labelProps?.className} ${pageLayout.animationClass}`;
        return (
            <div className={`page-layout-header ${classes}`} style={pageLayout.labelProps?.style}>
                <div className="flexSB">
                    {labelElement}
                    {!turnActionButtonsAreaOff && (
                        <div className="flex noWrap">
                            {undoState && pageLayout.enableUndoRedoFeature && (
                                <UndoRedoComponent
                                    undoState={undoState}
                                    formData={formData}
                                    redoState={redoState}
                                    hasChanges={hasChanges}
                                    handleChangeReducer={handleChangeReducer}
                                />
                            )}
                            {handleCancel && !pageLayout.disableCancelFeature && (
                                <button
                                    className="cancel icon-button"
                                    data-tip="Close and revert changes"
                                    onClick={handleCancel}
                                >
                                    <Icon icon="Cancel" />
                                </button>
                            )}
                            {handleSubmit && !pageLayout.disableSaveFeature && (
                                <button
                                    className="submit icon-button"
                                    onClick={innerHandleSubmit}
                                    data-tip={!hasChanges ? 'Nothing has changed' : 'Save new changes'}
                                    disabled={!hasChanges}
                                    type="submit"
                                >
                                    <Icon icon="Save" />
                                </button>
                            )}
                            {pageLayout.actions && pageLayout.actions.length > 1 ? (
                                <SwitchInput
                                    index={0}
                                    input={actionsButtonOptions}
                                    {...switchInputProps}
                                />
                            ) : pageLayout.actions && pageLayout.actions.map((input: any, i: number) => (
                                <SwitchInput
                                    key={input.id}
                                    index={i}
                                    input={input}
                                    {...switchInputProps}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {subLabelElement}
            </div>
        );
    }, [
        formData,
        pageLayout,
        handleChangeReducer,
        animate,
        handleCancel,
        handleSubmit,
        undoState,
        hasChanges,
        redoState,
        innerHandleSubmit,
        switchInputProps
    ]);

    // A memoized Input element that maps all inputs from formLayout.
    const mappedInputs = useMemo(() => pageLayout.inputs && pageLayout.inputs.map((input, i) => (
        <SwitchInput
            key={`input-${input.id}`}
            index={i}
            input={input}
            {...switchInputProps}
        />
    )), [
        pageLayout,
        switchInputProps
    ]);
    const containerClasses = useMemo(() => `page-layout ${pageLayout.containerProps?.className}`, [pageLayout.containerProps?.className]);
    const contentClasses = useMemo(() => `page-layout-input-container ${pageLayout.contentProps?.className} ${pageLayout.contentProps?.layoutClassName ?? 'flexColumn'}`, [
        pageLayout.contentProps?.className,
        pageLayout.contentProps?.layoutClassName
    ]);
    // This is extra redundancy. You should have your own loading before this component is even loaded.
    if (!pageLayout) return <CircularProgress />;

    const key = `form-layout-${pageLayout.id}`; // Use id because it is required.
    // This is basically a flex direction column form to start. You must define how the inputs and other inputs are layed out below the header. Using View/Section Elements on SwitchInput.jsx
    return (
        <form id={pageLayout.id} key={key} className={containerClasses}>
            {header}
            <div className={contentClasses} style={pageLayout.contentProps?.style}>
                {mappedInputs}
            </div>
        </form>
            
    );
};
export default PageLayout;

export const fallbackComponent = (input: any) => (
    <div className="fallback">
        {input.label && <div className="text-sub-headline">{input.label}</div>}
    </div>
);