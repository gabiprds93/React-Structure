import React, {Fragment} from 'react';
import { useTranslation } from "react-i18next";

import LoginForm from './LoginForm';
import Title from '../../components/Title/Title';
import withError from '../Error/ErrorBoundary';

const Login = () => {
  const { t } = useTranslation();

  return(
    <Fragment>
      <Title>{t('loginTitle')}</Title>
      <LoginForm />
    </Fragment>
  )
}

export default withError(Login);