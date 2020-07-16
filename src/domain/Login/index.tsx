import React, {Fragment} from 'react';
import { useTranslation } from "react-i18next";

import LoginForm from './LoginForm';
import Title from '../../components/Title/Title';

const Login = () => {
  const { t, i18n } = useTranslation();

  return(
    <Fragment>
      <Title>{t('loginTitle')}</Title>
      <LoginForm />
    </Fragment>
  )
}

export default Login;