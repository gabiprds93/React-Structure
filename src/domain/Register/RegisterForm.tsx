import React, { FormEvent } from 'react';

import Form from '../../components/Form/Form';
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();

  const registerFields = [
    { label: t('usernameLblAuthRegister'), type: 'text', name: 'username', validator: 'userNameValidator' },
    { label: t('passwordLblAuthRegister'), type: 'password', name: 'clave', validator: 'userNameValidator' },
    { label: t('repeatPasswordLblAuthRegister'), type: 'password', name: 'clave', validator: 'userNameValidator' },
  ]
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Submitting`);
  }
  const onSubmit = (dataItem: {
    [name: string]: any;
  }) => alert(JSON.stringify(dataItem, null, 2));

  const validators = {
    userNameValidator: (value: string) => !value ?
    "User Name is required" :
    value.length < 5 ? "User name should be at least 3 characters long." : "",
  }
  
  return (
    <Form fields={registerFields} handleSubmit={onSubmit} btnText={t('sendAuthBtn')} validators={validators}/>
  )
}

export default RegisterForm