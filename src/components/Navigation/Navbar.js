import React from 'react'
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Navs} from 'react-bootstrap'
//import './Navbar.css'

export default (props) => {

    return (
        
        <Navbar>
    		<Navbar.Header>
      			<Navbar.Brand>
        			<a href="#">BookCrowd</a>
      		</Navbar.Brand>
    		</Navbar.Header>
		<Nav bsStyle="pills" >		      
		      <NavItem  href="/books">Books</NavItem>
          <NavItem  href="/books/search">Find Book</NavItem>
          <NavItem  href="/books/new">Add Book</NavItem>
		      <NavItem  href="/about">About</NavItem>
		 </Nav>
       </Navbar>
      
    )
}
