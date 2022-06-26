import {INCREAMENT_COUNT,DECREAMENT_COUNT } from "./actionTypes";




export const increamentCounter = (payload) => {
    return {
        type: INCREAMENT_COUNT,
        payload: payload
    }
};
export const decreamentCounter = (payload) => {
    return {
      type: DECREAMENT_COUNT,
      payload: payload,
    };
};







