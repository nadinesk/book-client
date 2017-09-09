export default function gbooksReducer(state = {}, action) {
  console.log('GBOOKSREDUCER')
  switch(action.type) {
    case 'RECEIVED_GBOOKS_DATA': 
    	console.log('GBOOKS action', action.booksFound)
    	return action.booksFound;
    default: 
      return state;
  }
}