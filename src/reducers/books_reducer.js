

export default function booksReducer(state = [], action) {
  
  switch(action.type) {
    case 'RECEIVED_BOOKS_DATA':    
      var newTest = action.booksData.sort(function(a,b) { return b.likes - a.likes })        
      return newTest;
    case 'UPDATE_BOOK_SUCCESS':
    	//iterate over the state 
    	//replace the old book object with the new one in the payload
    	//return the new state      
    	var newArray=  state.map(function(book) {
    	   if(book.id === action.payload.book.book.id) {
    	   	return action.payload.book.book
    	   } else {
    	   	return book
    	   }
    	})

      return newArray.sort(function(a,b) { return b.likes - a.likes})

    default: 
      return state;
  }
}

