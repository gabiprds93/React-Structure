import React, {Fragment} from 'react';
import { useTranslation } from "react-i18next";

import RegisterForm from './RegisterForm';
import Title from '../../components/Title/Title';


const Register = () => {
  const { t, i18n } = useTranslation();

  return(
    <Fragment>
      <Title>{t('registerTitle')}</Title>
      <RegisterForm />
    </Fragment>
  )
}

export default Register;