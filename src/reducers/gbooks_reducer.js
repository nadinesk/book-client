export default function gbooksReducer(state = {}, action) {  
  switch(action.type) {
    case 'RECEIVED_GBOOKS_DATA':     	
    	return action.booksFound;
    default: 
      return state;
  }
}