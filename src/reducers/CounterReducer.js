import * as actionTypes from '../actions/actionTypes';

const initialState = {
    count : 5
}

export const counterReducer = (state = initialState , action) => {
    switch (action.type) {
      case actionTypes.INC_COUNT:
        return {
            ...state,
            count : state.count +  1
        }

        case actionTypes.DEC_COUNT:
        return {
            ...state,
            count : state.count -  1
        }
        
      default:
        return state
    }
  }