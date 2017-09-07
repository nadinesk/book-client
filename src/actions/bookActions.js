import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function fetchBooks() {

  return function(dispatch){
    dispatch({type: 'LOADING_BOOKS'})
    return fetch('http://localhost:3200/api/v1/books')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_BOOKS', payload: responseJson.books})
    })
    // return cats;
  }
}

export function addBook(book) {    
  console.log('addbook')
  return function(dispatch) {    
    dispatch({type: 'POST_BOOK'})
    return fetch('http://localhost:3200/api/v1/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book})
    })
      .then(res => res.json())
      .then(responseJson => {
          dispatch({type: 'FETCH_BOOKS', payload: responseJson.book});      
          browserHistory.push('/books')
      })
     

  }
}