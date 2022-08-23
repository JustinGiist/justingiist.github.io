import { useState } from "react";
import PageLayout, { iPageLayout } from "../../../components/PageLayout/PageLayout";
import { InputTypes } from "../../../components/PageLayout/SwitchInput";
import './BlackRed.scss';
const tempOptions = [
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
];
const pageLayout: iPageLayout = {
    id: 'test',
    label: 'Page Label',
    subLabel: 'This is a page description that will describe what to do on this page, or what this page is about',
    layoutClassName: 'flex-block',
    animationClass: 'Down',
    inputs: [
      {
        id: 'test',
        type: InputTypes.card,
        label: 'Card 1',
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
            options: tempOptions
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
        type: InputTypes.card,
        label: 'Card 2',
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
            options: tempOptions
          }
        ]
      },
      {
        id: 'test',
        type: InputTypes.card,
        label: 'Card 3',
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
            options: tempOptions
          }
        ]
      },
      {
        id: 'card-4',
        type: InputTypes.card,
        label: 'Card 4',
        inputs: [
          {
            id: 'text2',
            field: 'text2',
            type: InputTypes.text,
            label: 'text2'
          },
          {
            id: 'toggleGroup-2',
            field: 'toggleGroup-2',
            type: InputTypes.toggleButtonGroup,
            label: 'toggleGroup-2',
            options: tempOptions
          },
          {
            id: 'switch-2',
            field: 'switch-2',
            type: InputTypes.switch,
            label: 'switch-2'
          },
          {
            id: 'checkbox-2',
            field: 'checkbox-2',
            type: InputTypes.checkbox,
            label: 'checkbox-2'
          }
        ]
      }
    ]
};

const BlackRed = () => {
  const [pageData, setPageData] = useState<any>({});
  const [disabledFields, setDisabledFields] = useState<any>({
    
  });
  const [errorFields, setErrorFields] = useState<any>({
    text: 'This cannot be blank',
    toggleGroup: 'This cannot be blank',
    switch: 'This cannot be blank',
    checkbox: 'This cannot be blank',
    textarea: 'This cannot be blank',
    number: 'This cannot be blank',
    currency: 'This cannot be blank',
    select: 'This cannot be blank',
    rating: 'This cannot be blank',
    slider: 'This cannot be blank',
    radio: 'This cannot be blank'
  });

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