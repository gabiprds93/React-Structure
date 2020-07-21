import React, { FormEvent } from 'react';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";

import Form from '../../components/Form/Form';
import { loginUser } from '../../redux/actions/userActions'
import { AuthContext } from '../../context/Auth/AuthContext';

interface ILoginFormProps {
  loginUser: typeof loginUser
}

const LoginForm: React.FC<ILoginFormProps> = ({loginUser}) => {
  const auth = React.useContext(AuthContext);

  const { handleSubmit, register, errors } = useForm();
  const { t } = useTranslation();

  const loginFields = [
    { 
      label: t('usernameLblAuth'),
      type: 'text',
      name: 'email',
      inputRef: register,
      validator: 'userNameValidator'
    },
    { label: t('passwordLblAuth'), type: 'password', name: 'password', inputRef: register, validator: 'passwordValidator'  },
  ]

  const validators = {
    userNameValidator: (value: string) => !value ?
    t('inputRequired') : "",
    passwordValidator: (value: string) => !value ?
    t('inputRequired') :
    value.length < 7 ? t('passwordError') : "",
  }

  const onSubmit = (dataItem: {[name: string]: any;}) => {
    alert(`Submitting`);
    loginUser(dataItem);
    //   auth.login()
  }

  return (
    <Form fields={loginFields} handleSubmit={onSubmit} btnText={t('sendAuthBtn')} validators={validators} />
  )
}

const mapDispatchToProps = {loginUser}

export default connect(null, mapDispatchToProps)(LoginForm)