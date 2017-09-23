import fetch from 'isomorphic-fetch';
import { stopFetchingData } from './fetchingDataActions';
import { browserHistory } from 'react-router';

const receivedBooksData = booksData => {
  
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
      .then(res =>  res.json())
      .then(booksData => {                
     //   var booksLikeSort = booksData.sort(function(a,b) { return b.likes - a.likes })        
        dispatch(receivedBooksData(booksData))
        dispatch(stopFetchingData())
    })
   
  }
}



export function addBook(book) {      
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

export function updateBook(id, likesplus, booksData) {
  return function(dispatch) {
    return fetch(`https://dry-peak-34989.herokuapp.com/api/v1/books/${id}`, {
        method: 'PATCH', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: likesplus})

      })
      .then(res => res.json())
      .then(book =>  dispatch({type: 'UPDATE_BOOK_SUCCESS', payload: {book: book, books: booksData}}))
   }


  
}


export function findBook(book) {
  
  return function(dispatch){        
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${book}`)
      .then(res =>  res.json())
      .then(booksFound => {
        dispatch(receivedGBooksInfo(booksFound.items))
        browserHistory.push('/gbooks')          
        //dispatch(stopFetchingData())
    })
   
  }
}


