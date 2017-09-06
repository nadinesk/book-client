export default function booksReducer(state= {loading: false, books: []}, action) {
  switch ( action.type ) {
    case 'LOADING_BOOKS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_BOOKS':
      return {loading: false, pictures: action.payload}
    default:
      return state;
  }

}
