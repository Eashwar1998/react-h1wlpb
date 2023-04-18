import { NAME_CHANGE } from '../actions/actionTypes';

const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case NAME_CHANGE: {
      console.log('incrementing the counter inside reducer');
      return state + action.payload;
    }

    default:
      return state;
  }
};
export default usernameReducer;
