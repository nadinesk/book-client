
import React, { Component } from 'react'

export default class BooksList extends Component {


 constructor(props) {

        super(props)

        this.state = {
          currentBook: ''

        }
        
        
    }
	
 	setBook(id) {
        debugger
        const currentBook = this.props.books.filter(book => book.id === id)[0]
        this.setState({
            currentBook
        })

    }

 render() {
	debugger
	const books_map = this.props.books.map((book) => (
                
                        <p key={book.id} className="book-link" onClick={() => this.setBook(book.id)}>
                            {book.title}                    
                        </p>
                    

                ))    
    
  return (
    <p> {books_map} </p>
    )
	}
}
