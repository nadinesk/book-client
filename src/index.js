import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory, Route } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Routes from './Routes.js'
import { WrapperApp } from './App'
import Books from './components/Books'
import Home from './components/Home'
import AddBook from './components/AddBook'
import About from './components/About'
import {Navbar, Nav, NavItem, Navs} from 'react-bootstrap'
import store from './store'


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )

ReactDOM.render(
  
  <Provider store={store}>   
    
    	<Router history={browserHistory} routes={Routes} />    		
    
    
    
  </Provider>,

  document.getElementById('root')
);