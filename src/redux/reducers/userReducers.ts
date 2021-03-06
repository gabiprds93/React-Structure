import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  CLEAR_USER,
  UserState, 
  UserActionTypes
} from '../types/userTypes'

const initialState: UserState = {
  isAuthenticated: Boolean(localStorage.getItem('token_web')),
  // isAuthenticated: Boolean(sessionStorage.getItem('token_web')),
  isFetching: false,
  profile: undefined,
  errors: undefined,
}

export default function reducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        profile: undefined,
        errors: undefined
      })

    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token_web', action.payload.auth_token)
      // sessionStorage.setItem('token_web', action.payload.auth_token)
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.payload.client,
      })

    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errors: action.error,
      })

    case CLEAR_USER:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        profile: undefined,
        errors: undefined
      })

    default:
      return state
  }
}
