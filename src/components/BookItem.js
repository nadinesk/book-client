import React, { Component } from 'react'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'



export default class BookItem extends Component {

 constructor(props) {

        super(props)

        this.state = {
          count: 0
        }
    }
        

      increment() {
         this.setState({
          count: this.state.count + 1
        })

        
    }   
    render() {

  return (
    <div>
		<button onClick={() => this.increment()}>{this.state.count}</button> 
    </div>
  )
}
}

 