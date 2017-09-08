import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'

import { Link } from 'react-router'
import BookDetail from './BookDetail'
import BooksList from './BooksList'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

import './Books.css'

export default class Books extends Component {

    constructor(props) {

        super(props)

        this.state = {
          books: []

        }
        
        
    }

    componentDidMount() {
        debugger
       this.props.actions.fetchBooks()

       

    }

    fetchBooks() {

        fetch('http://localhost:3200/api/v1/books')        	
            .then(console.log(response => response.json()))
            .then(response => response.json())
            .then(data => this.setState({            	
                books: data,
                currentBook: data[0]
            }))

    }

    setBook(id) {
        const currentBook = this.state.books.filter(book => book.id === id)[0]
        this.setState({
            currentBook
        })
    }

    render() {

        // const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
        //     fetchSurfboards: this.fetchSurfboards,
        //     currentSurfboard: this.state.currentSurfboard,
        // }))
        

		
        
                
              
                
        

        return (
            <Grid>
            <Row className="show-grid">
                  <Col className="first_col" md={6} > <h3>All Books </h3> </Col></Row>                                
                 <Row className="show-grid">
                  <Col className="first_col1" md={6} >                                
                    <Link to="/books/new">Add A Book</Link>
                    
                 {this.props.books.length > 0 ? <BooksList books={this.props.books}/> : <h4>...loading</h4>}
                    
                  </Col> 
                    
                <Col className="first_col2" md={6}>                                
                    {
                        this.state.currentBook

                        ?

                        <BookDetail book={this.state.currentBook} />

                        :

                        <h4>...loading</h4>
                    }
                    </Col>
                </Row>
            </Grid>
        )
    }
}



function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  debugger
  return { books: state.books}
}

export const ConnectedBooks = connect(mapStateToProps, mapDispatchToProps)(Books)

