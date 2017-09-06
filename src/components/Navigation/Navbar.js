import React from 'react'
import { Link } from 'react-router'

//import './Navbar.css'

export default (props) => {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          
        </div>
    )
}
