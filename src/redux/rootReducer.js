import { combineReducers } from 'redux';

import { counterReducer, apiReducer, nameChangeReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  username: nameChangeReducer,
  apidata: apiReducer,
});

export default rootReducer;
