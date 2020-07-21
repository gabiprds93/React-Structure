export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export interface UserData {
  auth_token: string
  client: any
}

export interface UserCredentials {
  email?: string
  password?: string
}

export interface UserState {
  isAuthenticated: boolean
  isFetching: boolean
  profile?: UserData['client']
  errors?: any
}

export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST
  payload: UserCredentials
}

export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS
  payload: UserData
}

export interface UserLoginFailureAction {
  type: typeof USER_LOGIN_FAILURE
  error?: any
}

export type UserActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
