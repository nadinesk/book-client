import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

export default class Home extends Component {

    render() {

        return (
            <Grid>
             	<Row className="show-grid">
            	<Col xs={12} md={12} >
                	<h1>Welcome to The BookLister</h1>
                </Col>
               </Row>
                
            </Grid>
        )
    }
}