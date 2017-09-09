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


    }

    handleOnSubmit(event){
      event.preventDefault()            
      let book = Object.assign({}, this.state)
      debugger
      this.props.actions.findBook(book.gtitle)
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
                
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <FormControl 
                      type="text"
                      name="gtitle"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Title"
                    />

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







