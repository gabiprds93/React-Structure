import React, { FormEvent } from 'react';

import Form from '../../components/Form/Form';
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();

  const registerFields = [
    { label: t('usernameLblAuthRegister'), type: 'text', name: 'username' },
    { label: t('passwordLblAuthRegister'), type: 'password', name: 'clave' },
    { label: t('repeatPasswordLblAuthRegister'), type: 'password', name: 'clave' },
  ]
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Submitting`);
  }
  
  return (
    <Form fields={registerFields} handleSubmit={handleSubmit} btnText={t('sendAuthBtn')}/>
  )
}

export default RegisterForm