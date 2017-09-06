import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'


export default class AddBook extends Component {

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
                //this.props.fetchBooks()
                this.props.router.push('/books')
            })
    }

      handleOnSubmit(event){
            event.preventDefault()
            
            let book = Object.assign({}, this.state)
            this.props.addBook(book)
  }

    render() {

        

        return (
                 <form onSubmit={this.handleOnSubmit.bind(this)}>

              <div>
        <input type="text"
              name="title"
              onChange={(event) => this.handleInputChange(event)}
              /*  <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/> */
              placeholder="Title"/>


      </div>

      <div>
        <input type="text"
              name="author"
              onChange={(event) => this.handleInputChange(event)}
              /*  <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/> */
              placeholder="Author"/>


      </div>

      <div>
        <input type="number"
              name="rating"
              onChange={(event) => this.handleInputChange(event)}
              /*  <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/> */
              placeholder="Rating"/>


      </div>
      <div>
        <input type="text"
              name="notes"
              onChange={(event) => this.handleInputChange(event)}
              /*  <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/> */
              placeholder="Notes"/>


      </div>
      <div>
        <input type="submit" />
      </div>
      </form>
        )
    }
}

export const ConnectedBooksInput = connect(mapStateToProps, mapDispatchToProps)(AddBook)

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  return { books: state.books}
}







