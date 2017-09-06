import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Routes from './Routes.js'
import { WrapperApp } from './App'

import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  
  <Provider store={store}>   
    <WrapperApp />
  </Provider>,

  document.getElementById('root')
);