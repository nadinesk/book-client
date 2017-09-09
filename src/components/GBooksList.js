
import React, { Component } from 'react'
import GBookDetail from './GBookDetail'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class GBooksList extends Component {


 constructor(props) {

        super(props)

        this.state = {
          currentGBook: ''

        }
    }

    componentDidMount() {
    	this.setCurrentGBook()
    }	

	setCurrentGBook() {
		this.setState({
			currentBook: this.props.booksFound[0]
		})
	}
 	
 	setGBook(id) {
        const currentGBook = this.props.booksFound.filter(book => book.id === id)[0]
        this.setState({
            currentGBook
        })
    }

 	render() {
	   console.log('this.props.booksFound', this.props.booksFound)
		const g_books_map = this.props.booksFound.map((book) => (
                
        	<p key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
            	{book.volumeInfo.title}     
			</p>
        ))    
  
  	return (
    <div>
    	<Grid> 
    	 	<Row className="show-grid">
            	<Col className="first_col" md={6} >
    				{g_books_map} 
    			</Col> 
    			<Col className="first_col" md={6} >
                	{
                    	this.state.currentGBook
                        ?
                        <GBookDetail book={this.state.currentGBook} />
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
