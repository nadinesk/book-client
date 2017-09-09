import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import { addBook } from '../actions/bookActions.js'
import Books from '../components/Books'
import { FormErrors } from './FormErrors';
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


export default class FindBook extends Component {

    constructor(props) {
        super(props)
         this.state = {
          booksFound: []
        }
    }



    handleInputChange(event) {

        const { value, name } = event.target

         this.setState({
            [name]: value,
        })

        // this.setState({
        //     [name]: value,
        // }, () => { this.validateField(name, value) });


    }

    handleOnSubmit(event){
      event.preventDefault()            
      let book = Object.assign({}, this.state)
      this.props.actions.findBook(book)
    }


  //   validateField(fieldName, value) {
  //     let fieldValidationErrors = this.state.formErrors;
  //     let titleValid = this.state.titleValid;
    
  //     switch(fieldName) {
  //       case 'title':
  //         titleValid = value.length > 0; 
  //         fieldValidationErrors.title = titleValid ? '' : ' must include a book title';
  //         break;      
  //       default:
  //         break;
  //   }
  //     this.setState({formErrors: fieldValidationErrors,
  //       titleValid: titleValid,        
  //     }, this.validateForm);
  // }

  //   validateForm() {
  //     this.setState({formValid: this.state.titleValid});
  //   }

    // errorClass(error) {
    //   return(error.length === 0 ? '' : 'has-error');
    // }

    render() {
        return (
          <div>
           <Grid>
            <Row className="show-grid">
              <Col md={6} > <h3> Add a Book </h3> </Col> 
            </Row>                    
            <Row className="show-grid">
              <Col md={6} >                    
                
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <FormControl 
                      type="text"
                      name="gtitle"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Title"/>
                    
           

                  <button type="submit" >Submit </button>
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
  return { booksFound: state.booksFound}
}

export const ConnectedFindBooks = connect(mapStateToProps, mapDispatchToProps)(FindBook)







