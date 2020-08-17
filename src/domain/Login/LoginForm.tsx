import React, { FormEvent } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";

import Form from '../../components/Form/Form';
import { loginUser } from '../../redux/actions/userActions'
import { UserCredentials } from '../../redux/types/userTypes';
import { AppState } from '../../redux/reducers';
import ErrorMessage from '../Error/ErrorMessage';
import withError from '../Error/ErrorBoundary';

interface ILoginFormProps {
  loginUser: typeof loginUser
  errors: any
}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const errors = useSelector((state: AppState) => state.user.errors);
  const dispatch = useDispatch()
  const { handleSubmit, register } = useForm();
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

  const loginFormValidation = (values: UserCredentials) => {
    let errors: UserCredentials = {};
  
    if(!values.email){
      errors.email = t('inputRequired');
    }
  
    if(!values.password){
      errors.password = t('inputRequired');
    }
  
    return errors;
  }

  const onSubmit = (dataItem: {[name: string]: any;}) => {
    dispatch(loginUser(dataItem));
  }

  return (
    <React.Fragment>
      <Form fields={loginFields} handleSubmit={onSubmit} btnText={t('sendAuthBtn')} validators={loginFormValidation} />
      {errors && (
        <ErrorMessage msgError={t(`msgApiErrors.${errors.status}`)} />
      )}
    </React.Fragment>
  )
}

export default withError(LoginForm)