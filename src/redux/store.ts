import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers';
import api from './middleware/api';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk, api));

export default createStore(rootReducer, composeEnhancers);
