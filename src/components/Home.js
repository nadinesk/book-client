import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {

    render() {

        return (
            <div>
                <h1>Welcome to The BookLister</h1>
                <p>Check out our books at <Link to="/books">Books</Link></p>
            </div>
        )
    }
}