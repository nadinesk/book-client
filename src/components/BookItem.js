import React, { Component } from 'react'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateBook } from '../actions/bookActions.js'
import { browserHistory } from 'react-router';
import Books from './Books';



class BookItem extends Component {
  

    handleSubmit(){      
      
      let book_id  = this.props.book.id      
      let likesplus = this.props.book.likes + 1
      let books = this.props.books
      this.props.updateBook(book_id, likesplus, books)
  
   }



    render() {

  return (
    <div>
		
		<button onClick={() => this.handleSubmit()}>{this.props.book.likes}</button> 
		
    </div>
  )
}
}



export default connect(null, {updateBook} )(BookItem)

 