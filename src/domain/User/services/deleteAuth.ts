import {timeToDeleteAuth} from '../../../constants/global'

const deleteAuth = (clearUser: any) => {
  setTimeout(() => {
    localStorage.removeItem('token_web')
    // sessionStorage.removeItem('token_web')
    clearUser()
  }, timeToDeleteAuth);
};

export default deleteAuth;