
import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import gbooksReducer from './gbooks_reducer';


const rootReducer =  combineReducers({  
  books: booksReducer,
  booksFound: gbooksReducer
});


export default rootReducer;