import React, { Component } from 'react'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import { browserHistory } from 'react-router';



export default class BookItem extends Component {

 constructor(props) {

        super(props)

       
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
      .then(fetch('http://dry-peak-34989.herokuapp.com/api/v1/books')
          .then(console.log(response => response.json()))
          .then(res =>  res.json())
          .then(booksData => {
            console.log('booksData', booksData)
            this.setState({
              books: booksData
            })
             browserHistory.push('/books')     
            
        })
        )
      

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
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  return { books: state.books}
}

export const ConnectedBookItem = connect(mapStateToProps, mapDispatchToProps)(BookItem)

 