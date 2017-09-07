import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import { addBook } from '../actions/bookActions.js'
import Books from '../components/Books'


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

      handleOnSubmit(event){
            event.preventDefault()            
            let book = Object.assign({}, this.state)
            this.props.actions.addBook(book)
  }

    render() {

        return (
                <div>
                 <form onSubmit={this.handleOnSubmit.bind(this)}>

              <div>
        <input type="text"
              name="title"
              onChange={(event) => this.handleInputChange(event)}              
              placeholder="Title"/>


      </div>

      <div>
        <input type="text"
              name="author"
              onChange={(event) => this.handleInputChange(event)}              
              placeholder="Author"/>


      </div>

      <div>
        <input type="number"
              name="rating"
              onChange={(event) => this.handleInputChange(event)}              
              placeholder="Rating"/>


      </div>
      <div>
        <input type="text"
              name="notes"
              onChange={(event) => this.handleInputChange(event)}              
              placeholder="Notes"/>


      </div>
      <div>
        <input type="submit" />
      </div>
      </form>
      
      </div>
      )

    }
}



function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  return { books: state.books}
}

export const ConnectedBooksInput = connect(mapStateToProps, mapDispatchToProps)(AddBook)







