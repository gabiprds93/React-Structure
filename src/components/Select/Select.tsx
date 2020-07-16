import React from 'react';

export type OptionType = {
  value: string,
  text: string,
  selected: boolean
}

interface ISelectProps {
  options: OptionType[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<ISelectProps> = ({options, onChange}) => {
  return(
    <select onChange={onChange} >
      {options.map((item: OptionType, index: number) => {
        return(
          <option key={index} value={item.value} selected={item.selected}>{item.text}</option>
        )
      })}
    </select>
  )
}

export default Select;