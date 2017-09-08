import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { WrapperApp } from './App'
import Books from './components/Books'
import About from './components/About'
import { ConnectedBooksInput } from './components/AddBook'
import { ConnectedBooks } from './components/Books'

import {Navbar, Nav, NavItem, Navs} from 'react-bootstrap'

// import SurfboardDetail from './components/SurfboardDetail'

import Home from './components/Home'

export default (
     <Route path="/" component={ WrapperApp }>        
            <Route path="/books" component={ConnectedBooks} />
            <Route path="/books/new" component={ConnectedBooksInput} />
			<Route path="/about" component={About} />			
    </Route>
)
