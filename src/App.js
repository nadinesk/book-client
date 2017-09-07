import React, { Component } from 'react';
import Navbar from './components/Navigation/Navbar';
import Books from './components/Books'
import Home from './components/Home'
import AddBook from './components/AddBook'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/bookActions.js'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes.js'
import { Link } from 'react-router'

import './App.css';

export class App extends Component {
  componentDidMount() {
    
      
    if (this.props.books.books.length === 0) {
      console.log('in component did mount')
      
      this.props.actions.fetchBooks()


    }
  }

 render() {
    return (
      <div className="App">
      	<Navbar />
      	<Home/>
      	{this.props.children}
      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log('app  map state to props')
  return {books: state.books}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)