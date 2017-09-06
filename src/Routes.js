import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Books from './components/Books'
import AddBook from './components/AddBook'
// import SurfboardDetail from './components/SurfboardDetail'

import Home from './components/Home'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/books" component={Books}>
            <Route path="/books/new" component={AddBook} />
          {/*<Route path="/books/:id" component={BookDetail} />*/}
        </Route>

    </Route>
)
