import { GET_DATA, SET_LENGTH } from '../actions/actionTypes';

const apiReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA: {
      console.log('incrementing the counter inside reducer');
      return [
        {
          apiLength: state[0].apiLength,
          api: action.payload,
        },
      ];
    }
    case SET_LENGTH: {
      console.log('incrementing the counter inside reducer');
      return [
        {
          apiLength: action.len,
          api: state[0].api,
        },
      ];
    }

    default:
      return state;
  }
};
export default apiReducer;
