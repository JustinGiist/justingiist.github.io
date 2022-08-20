import { useCallback } from "react";
import ErrorBoundary from "./ErrorBoundary";
import SwitchInput, { InputProps, SwitchInputProps } from "./SwitchInput";
export interface iPageLayout {
    id: string;
    label?: string;
    subLabel?: string;
    layoutClassName?: string;
    style?: any;
    inputs?: InputProps[];
}
export interface PageLayoutProps {
    pageLayout: iPageLayout;
    pageData: any;
    handlePageData: any;
    errorFields: any;
    handleErrorFields: any;
    disabledFields: any;
    handleDisabledFields: any;

}

export enum ChangeType {
    formChange,
    errorChange,
    disabledChange,
    noPermissionChange
}

const objectChange = (prev: any, field: string, newValue: any) => {
    return {
        ...prev,
        [field]: newValue
    };
};

const PageLayout = ({
    pageLayout,
    pageData,
    errorFields,
    disabledFields,
    handlePageData,
    handleErrorFields,
    handleDisabledFields
}: PageLayoutProps) => {
    const handleReducerChange = useCallback((
        type: ChangeType,
        field: string,
        newValue: any
    ) => {
        switch(type) {
            case ChangeType.formChange:
                return handlePageData((prev: any) => objectChange(prev, field, newValue));
            case ChangeType.errorChange:
                return handleErrorFields((prev: any) => objectChange(prev, field, newValue));
            case ChangeType.disabledChange:
                return handleDisabledFields((prev: any) => objectChange(prev, field, newValue));
            case ChangeType.noPermissionChange:
            default:
                return null;
        }
    }, []);
    return (
        <form
            key={`page-${pageLayout.id}`}
            className={`jdgd-page-layout flexColumn`}
            style={pageLayout.style}
        >
            {pageLayout.label && <h1>{pageLayout.label}</h1>}
            {pageLayout.subLabel && <h5>{pageLayout.subLabel}</h5>}
            <div className={`${pageLayout.layoutClassName ?? 'flexColumn'}`}>
                {pageLayout.inputs && pageLayout.inputs.map(input => (
                    <SwitchInput
                        key={`switch-input-${input.id}`}
                        input={input}
                        pageData={pageData}
                        handleReducerChange={handleReducerChange}
                        disabledFields={disabledFields}
                        errorFields={errorFields}
                    />
                ))}
            </div>
        </form>
    );
};
export default PageLayout;

export const fallbackComponent = (input: InputProps) => (
    <div className="jdgd-fallback">
        {input.label && <div className="text-sub-headline">{input.label}</div>}
    </div>
);