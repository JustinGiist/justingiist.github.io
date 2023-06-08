import React from 'react';
import ColumnLayout from './ColumnLayout';
import RowLayout from './RowLayout';
import { Button } from '@material-ui/core';

export interface FormLayoutProps {
  formData: any;
  handleFormData: (data: any) => void;
  onSubmit: (data: any) => void;
  disabledFields?: any;
  handleDisabled?: (fields: any) => void;
  errorFields?: any;
  handleErrors?: (fields: any) => void;
  noPermissionFields?: any;
  undoState?: any;
  layoutClass?: string;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  formData,
  handleFormData,
  onSubmit,
  disabledFields,
  handleDisabled,
  errorFields,
  handleErrors,
  noPermissionFields,
  undoState,
  layoutClass,
  children,
}) => {
  const handleFormChange = (fieldName: string, value: any) => {
    handleFormData((prevFormData: any) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleDisableField = (fieldName: string, value: any) => {
    if (!handleDisabled) return;
    handleDisabled((prevFormData: any) => ({
        ...prevFormData,
        [fieldName]: value,
    }));
  };

  const handleFieldError = (fieldName: string, hasError: boolean) => {
    if (!handleErrors) return;
    handleErrors((prevErrorFields: any) =>
      hasError
        ? [...prevErrorFields, fieldName]
        : prevErrorFields.filter((field: any) => field !== fieldName)
    );
  };

  const handleFormSubmit = () => {
    onSubmit(formData);
  }

  return (
    <ColumnLayout>
        <RowLayout className='flexSB'>
            <div />
            <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
        </RowLayout>
        <form onSubmit={handleFormSubmit} className={layoutClass ?? 'flexColumn'}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<any>, {
                    formData,
                    handleFormChange,
                    disabledFields,
                    handleDisableField,
                    errorFields,
                    noPermissionFields,
                    handleFieldError,
                    undoState
                })
            )}
        </form>
    </ColumnLayout>
  );
};

export default FormLayout;
