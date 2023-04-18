import { createStore, applyMiddleware } from 'redux';
// import counterReducer from './reducers/counterReducer';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const initialState = {
  counter: 0,
  username: '',
  apidata: [{ apiLength: 0, api: [] }],
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
