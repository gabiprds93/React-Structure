import React from 'react'
import { useTranslation } from "react-i18next";

import Select from '../../components/Select/Select';
import { DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
// import {changeLanguage} from '../redux/actions/languageAction';

const langOptions = [ 
  {
    id: 'es',
    text: 'Español',
  },
  {
    id: 'en',
    text: 'English',
  }
]

const SelectLang: React.FC<any> = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: DropDownListChangeEvent) => {
    // changeLanguage(lng)
    let lng = event.target.value.id;
    i18n.changeLanguage(lng);
  };

  const defaultValue = () => {
    return langOptions.find((item) => {
      return item.id === window.localStorage.i18nextLng
    })
  }

  return(
    <Select 
      options={langOptions} 
      onChange={handleChange}
      defaultValue={defaultValue()}
    />
  )
}

// const mapDispatchToProps = { changeLanguage }

export default SelectLang
// export default connect(null, mapDispatchToProps)(SelectLangContainer)