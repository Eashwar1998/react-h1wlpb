import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementer,
  decrementer,
  nameChanger,
  dataFetcher,
} from './redux/actions/actionTypes';

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log('giving the updated counter');
    return state.counter;
  });
  const username = useSelector((state) => {
    return state.username;
  });
  const apidata = useSelector((state) => {
    return state.apidata;
  });
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          console.log('inc onClick');
          dispatch(incrementer());
        }}
      >
        Increments
      </button>
      <button
        onClick={() => {
          dispatch(decrementer());
        }}
      >
        decrement
      </button>

      <form>
        <input
          type="text"
          onChange={(e) => {
            console.log('INSIDE ');
            dispatch(nameChanger(e.target.value));
          }}
          value={username}
        />
      </form>
      <div>{username}</div>

      <div>
        <button
          onClick={() => {
            dispatch(dataFetcher());
          }}
        >
          {' '}
          get data
        </button>
        <div>
          <h3>There are {apidata[0].apiLength} objects </h3>
        </div>
        {apidata[0].api.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </div>
  );
}
