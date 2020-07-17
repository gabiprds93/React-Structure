import React, { FormEvent } from 'react';
import { useTranslation } from "react-i18next";

import Form from '../../components/Form/Form';

const LoginForm = () => {
  const { t } = useTranslation();

  const loginFields = [
    { label: t('usernameLblAuth'), type: 'text', name: 'username' },
    { label: t('passwordLblAuth'), type: 'password', name: 'clave' },
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Submitting`);
  }
  
  return (
    <Form fields={loginFields} handleSubmit={handleSubmit} btnText={t('sendAuthBtn')}/>
  )
}

export default LoginForm