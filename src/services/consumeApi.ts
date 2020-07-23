import axios from 'axios';
import moment from 'moment-timezone';

import { axiosTimeout } from '../constants/api';

const consumeApi = (
  method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "link" | "LINK" | "unlink" | "UNLINK",
  endpoint: string,
  data?: any,
) => {
  let config = {
    method: method,
    url: endpoint,
    data: data,
    timeout: axiosTimeout,
    headers: {
      'Accept-Language': 'es',
      'Time-Zone': moment.tz.guess(),
    },
  }
  
  return axios(config)
}

export default consumeApi;