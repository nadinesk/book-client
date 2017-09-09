// export default function booksReducer(state= {loading: false, books: []}, action) {
  
//   switch ( action.type ) {
  	
//     case 'LOADING_BOOKS':
//       return Object.assign({}, state, {loading: true})
//     case 'FETCH_BOOKS':
//     console.log('fetch')    
//       return {loading: false, books: action.payload}

//     default:
//     console.log('default')
//       return state;
//   }
//   console.log(state)

// }


export default function booksReducer(state = {}, action) {
  console.log('state', state)
  switch(action.type) {
    case 'RECEIVED_BOOKS_DATA':    
    console.log('BOOKS action', action.booksData)
      return action.booksData;
    
    default: 
      return state;
  }
}

