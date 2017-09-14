import React, { Component } from 'react'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import { browserHistory } from 'react-router';
import Books from './Books';



export default class BookItem extends Component {

 constructor(props) {

        super(props)

       this.setState({

       })
       
    }

    componentDidMount() {
      
    }



    handleSubmit(){      
      
      let book_id  = this.props.book.id      
      let likesplus = this.props.book.likes + 1

      fetch(`https://dry-peak-34989.herokuapp.com/api/v1/books/${book_id}`, {
        method: 'PATCH', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: likesplus})

      })
      .then(console.log(response => response.json()))
      .then(res =>  res.json())
     
        
      

   }



    render() {

  return (
    <div>
		
		<button onClick={() => this.handleSubmit()}>{this.props.book.likes}</button> 
		
    </div>
  )
}
}

function mapDispatchToProps(dispatch){
  debugger
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  return { books: state.books}
}

export const ConnectedBookItem = connect(mapStateToProps, mapDispatchToProps)(BookItem)

 