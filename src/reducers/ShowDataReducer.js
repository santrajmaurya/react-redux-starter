import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users : [],
    error: ''
}

export const showDataReducer = (state = initialState , action) => {

    switch (action.type) {
      case actionTypes.GET_DATA:
        return {
            ...state,
            users : action.userData
        }
      
      case actionTypes.GET_DATA_ERROR:
        return {
            ...state,
            error: action.error
        }

        case actionTypes.DELETE_USER:
        return {
            ...state,
            users: state.users.filter(user => {
                return user.id != action.id;
            })
        }
        
      default:
        return state
    }
  }