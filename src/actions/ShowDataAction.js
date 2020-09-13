import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchData = () => dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {dispatch(getData(response.data));})
      .catch(err => {dispatch(getDataFailed(err.response.data.error));
    });
  };

export const getData = (userData) => {
    return {
        type: actionTypes.GET_DATA,
        userData : userData
    };
  };


export const getDataFailed = (error) => {
    return {
        type: actionTypes.GET_DATA_ERROR,
        error: error
    };
};

export const deleteUser = (id) => {
    return {
        type: actionTypes.DELETE_USER,
        id: id
    };
};
