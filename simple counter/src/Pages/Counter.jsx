import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increamentCounter,decreamentCounter} from "../Redux/action"

const Counter = () => {


    const dispatch = useDispatch();

    const count = useSelector(state => state.count);
    
    
    const handleincreament = () => {
        
        dispatch(increamentCounter(1));

    };

    const handledecreament = () => {

        dispatch(decreamentCounter(1));

     };


  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={handledecreament}>-</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleincreament}>+</button>
    </div>
  );
}

export default Counter;