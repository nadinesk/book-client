import React, { Component } from 'react'
import { Link } from 'react-router'
import BookDetail from './BookDetail'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

import './Books.css'

export default class Books extends Component {

    constructor(props) {

        super(props)

        this.state = {
            books: [],
            currentBook: null,
            title: '',
            author: '', 
            rating: 0, 
            notes: ''

        }
    }

    componentDidMount() {

        this.fetchBooks()

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


		
        const books = this.state.books.map((book) => (
                    
                        <h3 key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
                            {book.title}                    
                        </h3>
                    

        ))

        return (
            <Grid>
            <Row className="show-grid">
                  <Col md={6} > <h3>Al Books </h3> </Col></Row>                                
                 <Row className="show-grid">
                  <Col md={6} >                                
                    <Link to="/books/new">Add A Book</Link>
                    {books}
                  </Col> 
                    
                <Col md={6}>                                
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
