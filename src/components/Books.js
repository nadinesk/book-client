import React, { Component } from 'react'
import { Link } from 'react-router'
import BookDetail from './BookDetail'

//import './Books.css'

export default class Books extends Component {

    constructor(props) {

        super(props)

        this.state = {
            books: [],
            currentBook: null,
            title: '',
            author: ''
        }

        // this.fetchSurfboards = this.fetchSurfboards.bind(this)
    }

    componentDidMount() {

        this.fetchBooks()
    }

    fetchBooks() {

        fetch('http://localhost:3200/api/v1/books')
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

            <div key={book.id}>
                <h3 className="book-link" onClick={() => this.setBook(book.id)}>
                    {book.author}
                </h3>
            </div>
        ))

        return (
            <div id="main-container" className="books">
                <div id="books-container">
              {/*<Link to="/books/new">Add A Book</Link>*/}
                    {books}
                </div>
                <div id="book-main-container">
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
