import React from 'react'

export interface IInputProps {
  label: string;
  name: string;
  type: string;
  inputRef?: any;
}

const Input: React.FC<IInputProps> = ({ label, name, type, inputRef}) => {
  return(
    <label>
      {label}
      <input type={type} name={name} ref={inputRef}></input>
    </label>
  )
}

export default Input