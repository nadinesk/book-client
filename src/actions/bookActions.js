import fetch from 'isomorphic-fetch';
import { stopFetchingData } from './fetchingDataActions';


import { browserHistory } from 'react-router';

const receivedBooksData = booksData => {
  console.log(booksData)
  return {
    type: 'RECEIVED_BOOKS_DATA',
    booksData
  }
}

export function fetchBooks() {

  return function(dispatch){    
    dispatch({type: 'FETCH_BOOKS'})
    return fetch('http://localhost:3200/api/v1/books')
      .then(console.log(response => response.json()))
      .then(res =>  res.json())
      .then(booksData => {
        console.log(booksData)
        dispatch(receivedBooksData(booksData))
        dispatch(stopFetchingData())
    })
   
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


 // fetch('http://localhost:3200/api/v1/books')          
 //            .then(console.log(response => response.json()))
 //            .then(response => response.json())
 //            .then(data => this.setState({             
 //                books: data,
 //                currentBook: data[0]
 //            }))