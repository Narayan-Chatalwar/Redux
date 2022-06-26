
import {INCREAMENT_COUNT,DECREAMENT_COUNT } from "./actionTypes";



const initstate = {
    count:0
}



 const reducer = (state = initstate,{ type, payload }) => {

    
    switch (type) {
      case INCREAMENT_COUNT:
        return {
            ...state,
            count:state.count + payload,
        };
      case DECREAMENT_COUNT:
        return {
          ...state,
          count: state.count - payload,
            };
        default:
            return {
                ...state
            }
    }

}

export { reducer };
    










