
import React, { Component } from 'react'
import BookDetail from './BookDetail'
import BookItem from './BookItem'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class BooksList extends Component {


 constructor(props) {

        super(props)

        this.state = {
          currentBook: ''
        }
    }

    componentDidMount() {
    	this.setCurrentBook()
    }	

	setCurrentBook() {
		this.setState({
			currentBook: this.props.books[0]
		})
	}
 	
 	setBook(id) {
        const currentBook = this.props.books.filter(book => book.id === id)[0]
        this.setState({
            currentBook
        })
    }



 	render() {
	
		const books_map = this.props.books.map((book) => (
            <div>
            	    <p key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
                    {book.title}  
                    <BookItem book={book} /> 
                    </p>
    			
                
            </div> 
        ))    
  
  	return (
    <div><br />
    	<Grid> 
    	 	<Row className="show-grid">
            	<Col className="first_col" md={6} >
    				{books_map} 
    			</Col> 
    			<Col className="first_col" md={6} >
                	{
                    	this.state.currentBook
                        ?
                        <BookDetail book={this.state.currentBook} />
                        :
                        <h4>click a book to see more details</h4>
                    }
        		</Col>
        	</Row> 
       </Grid>
    </div>
  )
  }
}
