import React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label, Error, Hint, FloatingLabel } from '@progress/kendo-react-labels';
import {Input} from '@progress/kendo-react-inputs';

export interface IInputProps {
  label: string;
  name: string;
  type: string;
  inputRef?: any;
  validator?: any;
}

// const Input: React.FC<IInputProps> = ({ label, name, type, inputRef}) => {
//   return(
//     <label>
//       {label}
//       <input type={type} name={name} ref={inputRef}></input>
//     </label>
//   )
// }


const FormInput = (fieldRenderProps: any) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;

  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';

  return (
      <FieldWrapper>
          <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
          <div className={'k-form-field-wrap'}>
              <Input
                  valid={valid}
                  type={type}
                  id={id}
                  disabled={disabled}
                  ariaDescribedBy={`${hintId} ${errorId}`}
                  {...others}
              />
              {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
              }
              {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
              }
          </div>
      </FieldWrapper>
  );
};

export default FormInput;