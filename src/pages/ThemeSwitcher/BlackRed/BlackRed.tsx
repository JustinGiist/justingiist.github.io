import { useState } from "react";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import './BlackRed.scss';
const pageLayout: iPageLayout = {
    id: 'test',
    label: 'Page Label',
    subLabel: 'Page SubLabel is longer',
    layoutClassName: 'flex-block',
    style: {
      padding: '16px'
    },
    inputs: [
      {
        id: 'test',
        type: InputTypes.view,
        inputProps: {
          className: 'flexColumn'
        },
        inputs: [
          {
            id: 'text',
            field: 'text',
            type: InputTypes.text,
            label: 'text'
          },
          {
            id: 'toggleGroup',
            field: 'toggleGroup',
            type: InputTypes.toggleButtonGroup,
            label: 'toggleGroup',
            options: [
              {
                value: "0",
                label: 'Zero'
              },
              {
                value: "1",
                label: 'One'
              },
              {
                value: "2",
                label: 'Two'
              },
              {
                value: "3",
                label: 'Three'
              }
            ]
          },
          {
            id: 'switch',
            field: 'switch',
            type: InputTypes.switch,
            label: 'switch'
          },
          {
            id: 'checkbox',
            field: 'checkbox',
            type: InputTypes.checkbox,
            label: 'checkbox'
          }
        ]
      },
      {
        id: 'test',
        type: InputTypes.view,
        inputProps: {
          className: 'flexColumn'
        },
        inputs: [
          {
            id: 'textarea input',
            field: 'textarea',
            type: InputTypes.textarea,
            label: 'textarea input'
          },
          {
            id: 'number input',
            field: 'number',
            type: InputTypes.number,
            label: 'number input'
          },
          {
            id: 'currency input',
            field: 'currency',
            type: InputTypes.currency,
            label: 'currency input'
          },
          {
            id: 'select input',
            field: 'select',
            type: InputTypes.select,
            label: 'select input',
            options: [
              {
                value: 0,
                label: 'Zero'
              },
              {
                value: 1,
                label: 'One'
              },
              {
                value: 2,
                label: 'Two'
              },
              {
                value: 3,
                label: 'Three'
              }
            ]
          }
        ]
      },
      {
        id: 'test',
        type: InputTypes.view,
        inputProps: {
          className: 'flexColumn'
        },
        inputs: [
          {
            id: 'rating input',
            field: 'rating',
            type: InputTypes.rating,
            label: 'rating input'
          },
          {
            id: 'slider input',
            field: 'slider',
            type: InputTypes.slider,
            label: 'slider input'
          },
          {
            id: 'radio input',
            field: 'radio',
            type: InputTypes.radio,
            label: 'radio input',
            options: [
              {
                value: "0",
                label: 'Zero'
              },
              {
                value: "1",
                label: 'One'
              },
              {
                value: "2",
                label: 'Two'
              },
              {
                value: "3",
                label: 'Three'
              }
            ]
          }
        ]
      }
    ]
};

const BlackRed = () => {
  const [pageData, setPageData] = useState<any>({});
  const [disabledFields, setDisabledFields] = useState<any>({});
  const [errorFields, setErrorFields] = useState<any>({});
  return (
    <PageLayout 
      pageLayout={pageLayout}
      pageData={pageData}
      handlePageData={setPageData}
      disabledFields={disabledFields}
      handleDisabledFields={setDisabledFields}
      errorFields={errorFields}
      handleErrorFields={setErrorFields}
    />
  );
};
export default BlackRed;