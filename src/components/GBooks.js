
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import GBooksList from './GBooksList'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class GBooks extends Component {


 constructor(props) {

        super(props)
         this.state = {
          booksFound: []
        }

        
    }

        componentDidMount() {      
       		
       		//this.props.actions.findBook()
       		
    	}

    
	
 	 render() {

 	
  
      return (
       <div>
        {this.props.booksFound.length > 0 ? <GBooksList booksFound={this.props.booksFound}/> : <h4>...do another search</h4>}   
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

export const ConnectedGBooks = connect(mapStateToProps, mapDispatchToProps)(GBooks)

