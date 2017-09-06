import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { WrapperApp } from './App'
import Books from './components/Books'
import About from './components/About'
import AddBook from './components/AddBook'

// import SurfboardDetail from './components/SurfboardDetail'

import Home from './components/Home'

export default (
    <Route>
        	<Route path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/books/new" component={AddBook} />
			<Route path="/about" component={About} />
    </Route>
)
