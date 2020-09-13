import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { incrementCount, decrementCount} from './actions/CounterAction';
import { fetchData, deleteUser } from './actions/ShowDataAction';


import './App.css';

const  App = (props) =>  {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    props.fetchData();

  }, [])

  const deleteUserById = (e) => {
    debugger
    const selectedId = e.target.id;
    props.deleteUser(selectedId);
    console.log('selectedId', selectedId);

  }

  console.log('props', props);
  return (
    <>
    <div className="App">
      <h1>{props.counterReducer.count}</h1>
      <button className="btn btn-primary" onClick={props.incrementCount}>Increment</button>
      <button  className="btn btn-danger" onClick={props.decrementCount}>Decrement</button>
    </div>
    
    <br />
    <table className="table table-dark">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">UserName</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    {props.userReducer.users.map(user => {
      return (
      <tbody key={user.id}>
      <tr >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><button id={user.id} className="btn btn-danger" onClick={deleteUserById}>Delete</button></td>
      </tr>
    </tbody>
      )
    })}
  </table>
  </>
  );
}

const mapStateToProps = state => {
  return {
    counterReducer: state.counterReducer,
    userReducer : state.showDataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      incrementCount: () => dispatch(incrementCount()),
      decrementCount: () => dispatch(decrementCount()),
      fetchData: () => dispatch(fetchData()),
      deleteUser: (id) => dispatch(deleteUser(id)),
      
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);