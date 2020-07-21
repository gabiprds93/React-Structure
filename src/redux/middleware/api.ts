import {CALL_API} from '../../constants/api';
import consumeApi from '../../services/consumeApi';
import handleApiError from '../../services/handleApiError';

const api = (store: { getState: () => any }) => (next: (action: any) => any) => (action: any) => {
  const paramsApi = action[CALL_API]
  if (typeof paramsApi === 'undefined') {
    return next(action)
  }
  const {
    method,
    endpoint,
    data,
    types,
  } = paramsApi

  const [requestType, successType, errorType] = types

  next({ type: requestType })

  return consumeApi(method,endpoint,data)
    .then(response => {
      return next({
        type: successType,
        payload: response.data,
      })
    })
    .catch (error => {
      let errorResponse = handleApiError(error)
      return next({
        type: errorType,
        error: errorResponse,
      })
    })
}

export default api;