import {
  COUNTER_INCREMENTER,
  COUNTER_DECREMENTER,
} from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_INCREMENTER: {
      console.log('incrementing the counter inside reducer');
      return state + 1;
    }
    case COUNTER_DECREMENTER: {
      console.log('decrementing the counter inside reducer');
      return state - 1;
    }
    default:
      return state;
  }
};
export default counterReducer;
