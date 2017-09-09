import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import { addBook } from '../actions/bookActions.js'
import Books from '../components/Books'
import { FormErrors } from './FormErrors';
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


export default class AddBook extends Component {

    constructor(props) {
        super(props)
          this.state = {          
            formErrors: {title: ''},
            titleValid: false,
            formValid: false
        }
    }

    handleInputChange(event) {

        const { value, name } = event.target

        this.setState({
            [name]: value,
        }, () => { this.validateField(name, value) });
    }

    handleOnSubmit(event){
      event.preventDefault()            
      let book = Object.assign({}, this.state)
      this.props.actions.addBook(book)
   }


    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let titleValid = this.state.titleValid;
    
      switch(fieldName) {
        case 'title':
          titleValid = value.length > 0; 
          fieldValidationErrors.title = titleValid ? '' : ' must include a book title';
          break;      
        default:
          break;
    }
      this.setState({formErrors: fieldValidationErrors,
        titleValid: titleValid,        
      }, this.validateForm);
  }

    validateForm() {
      this.setState({formValid: this.state.titleValid});
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
          <div>
           <Grid>
            <Row className="show-grid">
              <Col md={6} > <h3> Add a Book </h3> </Col> 
            </Row>                    
            <Row className="show-grid">
              <Col md={6} >                    
                <FormErrors formErrors={this.state.formErrors} />
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <FormControl 
                      type="text"
                      name="title"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Title"/>
                    
                  <FormControl     
                    type="text"
                    name="author"
                    onChange={(event) => this.handleInputChange(event)}              
                    placeholder="Author"/>

                  <FormControl     
                    type="number"
                    name="rating"
                    onChange={(event) => this.handleInputChange(event)}              
                    placeholder="Rating"/>
                  <FormControl     
                    type="text"
                    name="notes"
                    onChange={(event) => this.handleInputChange(event)}              
                    placeholder="Notes"/>

                  <button type="submit" disabled={!this.state.formValid}>Submit </button>
                </form>      
              </Col>
            </Row>
          </Grid>
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







