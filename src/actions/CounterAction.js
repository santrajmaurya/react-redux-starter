
import * as actionTypes from './actionTypes';

  export const incrementCount = () => {
    debugger
    return {
      type: actionTypes.INC_COUNT,
    };
  };

  export const decrementCount = () => {
    return {
      type: actionTypes.DEC_COUNT,
    };
  };