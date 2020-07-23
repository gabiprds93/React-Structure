import React, {Fragment, FormEvent} from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {IInputProps} from '../Input/Input';
import Input from '../Input/Input';
import withError from '../../domain/Error/ErrorBoundary';
export interface IFormProps {
  fields: IInputProps[];
  handleSubmit: ((values: {
    [name: string]: any;
}, event?: React.SyntheticEvent<any, Event> | undefined) => void);
  btnText: string;
  validators?: any
}

const FormComponent: React.FC<IFormProps> = ({fields, handleSubmit, btnText, validators}) => {
  let error:any = undefined
  return (
    <Fragment>
      <Form 
        onSubmit={handleSubmit}
        validator={validators}
        render={(formRenderProps) => (
          <FormElement style={{maxWidth: 650, margin: 'auto'}}>
            <fieldset className={'k-form-fieldset'}>
              {fields.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Field
                      id={item.name}
                      name={item.name}
                      label={item.label}
                      component={Input}
                      type={item.type}
                    />
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

export default withError(FormComponent);