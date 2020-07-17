import React from 'react';

export type OptionType = {
  value: string,
  text: string,
  selected: boolean
}

interface ISelectProps {
  options: OptionType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}

const Select: React.FC<ISelectProps> = ({options, onChange, defaultValue}) => {
  return(
    <select onChange={onChange} defaultValue={defaultValue} >
      {options.map((item: OptionType, index: number) => {
        return(
          <option key={index} value={item.value}>{item.text}</option>
        )
      })}
    </select>
  )
}

export default Select;