import React from 'react'
import { useTranslation } from "react-i18next";
import Select from '../../components/Select/Select';
// import {changeLanguage} from '../redux/actions/languageAction';

const langOptions = [ 
  {
    value: 'es',
    text: 'Español',
    selected: true
  },
  {
    value: 'en',
    text: 'English',
    selected: false
  }
]

const SelectLang: React.FC<any> = () => {
  const { i18n } = useTranslation();

  const handleChange = (lng: string) => {
    // changeLanguage(lng)
    i18n.changeLanguage(lng);
  };

  return(
    <Select 
      options={langOptions} 
      onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)}
      defaultValue={window.localStorage.i18nextLng}
    />
  )
}

// const mapDispatchToProps = { changeLanguage }

export default SelectLang
// export default connect(null, mapDispatchToProps)(SelectLangContainer)