import { NAME_CHANGE } from '../actions/actionTypes';

const nameChangeReducer = (state = '', action) => {
  switch (action.type) {
    case NAME_CHANGE: {
      console.log('incrementing the counter inside reducer');
      return action.payload;
    }

    default:
      return state;
  }
};
export default nameChangeReducer;
