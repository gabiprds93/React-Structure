import React, {Fragment, FormEvent} from 'react';

import Input, {IInputProps} from '../Input/Input';
import Button from '../Button/Button';

export interface IFormProps {
  fields: IInputProps[];
  handleSubmit: ((event: FormEvent<HTMLFormElement>) => void);
  btnText: string;
}

const Form: React.FC<IFormProps> = ({fields, handleSubmit, btnText}) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        {fields.map((item, index) => {
          return (
            <Fragment key={index}>
              <Input
                label={item.label} 
                name={item.name}
                type={item.type}
                inputRef={item.inputRef}
              />
              <br/>
            </Fragment>
          )
        })}
        <Button type='submit'>{btnText}</Button>
      </form>
    </Fragment>
  )
};

export default Form;