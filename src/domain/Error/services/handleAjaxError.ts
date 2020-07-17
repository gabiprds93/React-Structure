import { ErrorMessageException } from "../ErrorMessage/index";
const handleAjaxError = (error: any) => {
  if (error.response) {
    let status = error.response.status
    return  ErrorMessageException.filter( value => value.status == status )
  }
}

export default handleAjaxError;


