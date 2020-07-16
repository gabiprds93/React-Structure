import React from 'react'

export interface IInputProps {
  label: string;
  name: string;
  type: string;
}

const Input: React.FC<IInputProps> = ({ label, name, type}) => {
  return(
    <label>
      {label}
      <input type={type} name={name}></input>
    </label>
  )
}

export default Input