
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'
import GBooksList from './GBooksList'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'
import store from '../store'



export default class GBooks extends Component {


 constructor(props) {

        super(props)
         this.state = {
          booksFound: []
        }

        
    }

        componentDidMount() {      
       		
         

       		
    	}

      testThis() {
          

          if (this.props.booksFound.length > 0) {
            return <GBooksList booksFound={this.props.booksFound}/> 
          }
           else {
              return <h4>Do a new <a href="/books/find">search</a></h4>
         }
          
          
      }

    
	
 	 render() {

 	  
  
      return (
       <div>

        {this.testThis()}   
        
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

