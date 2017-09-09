
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import BookDetail from './BookDetail'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class GBooks extends Component {


 constructor(props) {

        super(props)
         this.state = {
          booksFound: []
        }

        
    }

        componentDidMount() {      
       		debugger
       		this.props.actions.findBook()
       		this.props.actions.fetchBooks()
    	}

    
	
 	 render() {

 	 	const books_map = this.props.books.map((book) => (
                
        	<p key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
            	{book.title}     
			</p>
        ))    
  
      return (
       <div>
       </div>
      )
    }

}


function mapDispatchToProps(dispatch){
  
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  debugger
  return { booksFound: state.booksFound}
}

export const ConnectedGBooks = connect(mapStateToProps, mapDispatchToProps)(GBooks)

