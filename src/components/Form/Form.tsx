import React, {Fragment, FormEvent} from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {IInputProps} from '../Input/Input';
// import Button from '../Button/Button';
import Input from '../Input/Input';
export interface IFormProps {
  fields: IInputProps[];
  handleSubmit: ((values: {
    [name: string]: any;
}, event?: React.SyntheticEvent<any, Event> | undefined) => void);
  btnText: string;
  validators?: any
}

const FormComponent: React.FC<IFormProps> = ({fields, handleSubmit, btnText, validators}) => {
  return (
    <Fragment>
      <Form 
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement style={{maxWidth: 650, margin: 'auto'}}>
            <fieldset className={'k-form-fieldset'}>
              {fields.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="mb-3">
                    <Field
                      id={item.name}
                      name={item.name}
                      label={item.label}
                      component={Input}
                      validator={validators[item.validator]}
                    />
                    {/* <Input
                      label={item.label} 
                      name={item.name}
                      type={item.type}
                      inputRef={item.inputRef}
                    /> */}
                    </div>

                    <br/>
                  </Fragment>
                )
              })}
            </fieldset>
            <Button
              primary={true}
              type={'submit'}
              disabled={!formRenderProps.allowSubmit}
            >
              {btnText}
            </Button>
          </FormElement >
        )}
      />
    </Fragment>
  )
};

export default FormComponent;