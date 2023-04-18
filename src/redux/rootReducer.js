import { combineReducers } from 'redux';

import { counterReducer, apiReducer, usernameReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  username: usernameReducer,
  apidata: apiReducer,
});

export default rootReducer;
