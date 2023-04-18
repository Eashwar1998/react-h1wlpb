import axios from 'axios';

export const COUNTER_INCREMENTER = 'COUNTER_INCREMENTER';
export const COUNTER_DECREMENTER = 'COUNTER_DECREMENTER';
export const NAME_CHANGE = 'NAME_CHANGE';
export const GET_DATA = 'GET_DATA';
export const SET_LENGTH = 'SET_LENGTH';

export const incrementer = () => {
  console.log('inside incrementor creator : dispatching action inc to reducer');
  return { type: COUNTER_INCREMENTER };
};

export const decrementer = () => {
  console.log(
    'inside inderementor creator : dispatching action dec to reducer'
  );
  return { type: COUNTER_DECREMENTER };
};
export const nameChanger = (uname) => {
  console.log('inside name changer');
  console.log(uname);
  return { type: NAME_CHANGE, payload: uname };
};

export const dataFetcher = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data = response.data;
    dispatch({ type: GET_DATA, payload: data });

    const arraylength = data.length;
    dispatch({ type: SET_LENGTH, len: arraylength });
    console.log(getState());
  } catch (e) {
    console.log(e.message.error);
  }
};
