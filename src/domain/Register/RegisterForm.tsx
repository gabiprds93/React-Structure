import React from 'react';

import Form from '../../components/Form/Form';
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();

  const registerFields = [
    { label: t('usernameLblAuthRegister'), type: 'text', name: 'username'},
    { label: t('passwordLblAuthRegister'), type: 'password', name: 'password'},
    { label: t('repeatPasswordLblAuthRegister'), type: 'password', name: 'repeatPassword'},
  ]

  const registerFormValidation = (values: any) => {
    let errors: any = {};
  
    if(!values.username){
      errors.username = t('inputRequired');
    }
  
    if(!values.password){
      errors.password = t('inputRequired');
    }

    if(!values.repeatPassword){
      errors.repeatPassword = t('inputRequired');
    }

    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = t('differentPasswordError')
    }
  
    return errors;
  }

  const onSubmit = (dataItem: {
    [name: string]: any;
  }) => alert(JSON.stringify(dataItem, null, 2));
  
  return (
    <Form fields={registerFields} handleSubmit={onSubmit} btnText={t('sendAuthBtn')} validators={registerFormValidation}/>
  )
}

export default RegisterForm