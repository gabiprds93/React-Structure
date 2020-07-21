import React from 'react';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

export type OptionType = {
  id: string,
  text: string,
}

interface ISelectProps {
  options: OptionType[];
  onChange: (event: DropDownListChangeEvent) => void;
  defaultValue?: OptionType;
}

const Select: React.FC<ISelectProps> = ({options, onChange, defaultValue}) => {
  return(
    <DropDownList 
      data={options} 
      textField="text" 
      onChange={onChange} 
      defaultValue={defaultValue} 
      dataItemKey='id'
    />
  )
}

export default Select;