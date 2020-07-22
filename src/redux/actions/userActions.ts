import { CALL_API, AUTH_URL } from '../../constants/api';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_USER, UserCredentials } from '../types/userTypes';

export function loginUser(creds: UserCredentials) {
  console.log(creds)
  return {
    [CALL_API]: {
      method: 'POST',
      endpoint: AUTH_URL,
      authenticated: false,
      data: creds,
      types: [USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE],
    },
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}