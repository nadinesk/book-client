import React, { Component } from 'react'

export default class AddSurfboard extends Component {

    constructor(props) {

        super(props)

        this.state = {

        }

    }

    handleInputChange(event) {

        const { value, name } = event.target

        this.setState({
            [name]: value,
        })
    }

    handleOnClick(event) {

        event.preventDefault()

        fetch('http://localhost:3200/api/v1/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ book: this.state })
        })
            .then(response => response.json())
            .then(data => {
                this.props.fetchBooks()
                this.props.router.push('/books')
            })
    }

    render() {

        console.log(this.state)

        return (
            <form>

                <div className="input-group">
                    <input
                        className="add-book-field"
                        type="text"
                        name="title"
                        onChange={(event) => this.handleInputChange(event)}
                        placeholder="Title" />
                </div>

                <div className="input-group">
                    <input
                        className="add-book-field"
                        type="number"
                        name="rating"
                        onChange={(event) => this.handleInputChange(event)}
                        placeholder="Rating" />
                </div>

                <div className="input-group">
                    <input
                        className="add-book-field"
                        type="text"
                        name="author"
                        onChange={(event) => this.handleInputChange(event)}
                        placeholder="Author" />
                </div>

                <div className="input-group">
                    <input
                        className="add-book-field"
                        type="text"
                        name="notes"
                        onChange={(event) => this.handleInputChange(event)}
                        placeholder="Notes" />
                </div>

                <div className="input-group">
                    <input
                        className="add-book-button"
                        type="submit"
                        value="Create Book"
                        onClick={(event) => this.handleOnClick(event)} />
                </div>


            </form>
        )
    }
}
