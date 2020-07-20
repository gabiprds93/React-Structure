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
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const { handleSubmit, register, errors } = useForm();
  const { t } = useTranslation();

  const loginFields = [
    { 
      label: t('usernameLblAuth'),
      type: 'text',
      name: 'email',
      inputRef: register
    },
    { label: t('passwordLblAuth'), type: 'password', name: 'password', inputRef: register  },
  ]

  const onSubmit = (values:any) => {
    console.log(values)

    // event.preventDefault();
    alert(`Submitting`);
    loginUser(values);
    //auth.login()
  }

  return (
    <Form fields={loginFields} handleSubmit={handleSubmit(onSubmit)} btnText={t('sendAuthBtn')} />
  )
}

const mapDispatchToProps = {loginUser}

export default connect(null, mapDispatchToProps)(LoginForm)