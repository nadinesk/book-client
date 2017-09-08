
import React, { Component } from 'react'
import BookDetail from './BookDetail'

export default class BooksList extends Component {


 constructor(props) {

        super(props)

        this.state = {
          currentBook: ''

        }
        
        
    }
	
 	setBook(id) {
    
        const currentBook = this.props.books.filter(book => book.id === id)[0]
        this.setState({
            currentBook
        })

    }

 render() {
	
	const books_map = this.props.books.map((book) => (
                
                        <p key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
                            {book.title}     
                            {book.id}               
                        </p>
                    
  
                ))    
  
  return (
    <div>
    	{books_map} 

    	<div >                                
                    {
                        this.state.currentBook

                        ?

                        <BookDetail book={this.state.currentBook} />

                        :

                        <h4>...loading</h4>
                    }
                    </div>


    </div>
    )
	}
}
