import React from "react";
import { useTranslation } from "react-i18next";
interface IErrorMessageProps {
  msgError: string;
}
const ErrorMessage: React.FC<IErrorMessageProps> = ({msgError}) =>{
  const { t } = useTranslation();
  
  return(
    <p style={{color: 'red'}}>{t(msgError)}</p>
  )
}
export default ErrorMessage