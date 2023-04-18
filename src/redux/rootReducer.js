import { combineReducers } from 'redux';

import counterReducer from "./reducers/counterReducer"
import nameChangeReducer from "./reducers/namechangeReducer"
import apiReducer from "./reducers/apiReducer"
const rootReducer = combineReducers({
  counter: counterReducer,
  username: nameChangeReducer,
  apidata: apiReducer,
});

export default rootReducer;
