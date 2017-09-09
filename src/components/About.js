import React, { Component } from 'react' 
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class About extends Component {

    render() {

        return (
            <Grid> 
            	<Row className="show-grid">
            		<Col className="first_col" md={12} >        	
            			<br/>
            			<div> The BookCrowd crowdsources books that other users have enjoyed, to give others ideas for new books to read. </div>
            			<div><h4> List Books You Love</h4> </div>
            			<div> <a href="books/new">Add a book </a> to the list so others can get next-book ideas.</div>
            			<br />
            			<div><h4>Search for Books</h4> </div>
            				<h5>BookCrowd</h5> 
            				<div>Review the BookCrowd <a href="/books">list of books</a> that other uses have added to get ideas for your next read.</div> 
            				<h5>Google Books</h5> 
            				<div><a href="/books/search">Search for a book </a> by title to find the first ten results returned by the <a href="https://developers.google.com/books/">Google Books API</a>. </div> 
            	        <br />
            	        <h4> Other </h4>
            	        	<div>This site was made using React and Redux for the client side, and Rails for the backend. </div>
            	        	<div>The code for the client-side is <a href="https://github.com/nadinesk/book-client">here</a>.</div>
            	        	<div>The code for the backend is <a href="https://github.com/nadinesk/book-api">here</a>. </div>
            		</Col>
            	</Row> 
            </Grid>
        )
    }
}