import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';

import { counterReducer } from './reducers/CounterReducer';
import { showDataReducer } from './reducers/ShowDataReducer';

const rootReducer = combineReducers({
  counterReducer : counterReducer,
  showDataReducer: showDataReducer
});

const store = createStore(rootReducer, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
