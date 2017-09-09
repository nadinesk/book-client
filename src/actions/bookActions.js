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

const receivedGBooksInfo = booksFound => {
  
  return {
    type: 'RECEIVED_GBOOKS_DATA',
    booksFound
  }
}

export function fetchBooks() {

  return function(dispatch){    
    //dispatch({type: 'FETCH_BOOKS'})
    return fetch('https://dry-peak-34989.herokuapp.com/api/v1/books')
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
    return fetch('https://dry-peak-34989.herokuapp.com/api/v1/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book})      
    })
      .then(res => res.json())
      .then(responseJson => {          
          //dispatch({type: 'FETCH_BOOKS', payload: responseJson.book});
          browserHistory.push('/books')          
      })



  }
}


export function findBook(book) {
  debugger
  return function(dispatch){        
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${book}`)
    .then(console.log('findbookplace'))
      .then(console.log(response => response.json()))
      .then(res =>  res.json())
      .then(booksFound => {
        console.log('booksFOUNDITEMS', booksFound.items)
        dispatch(receivedGBooksInfo(booksFound.items))
        browserHistory.push('/gbooks')          
        //dispatch(stopFetchingData())
    })
   
  }
}

