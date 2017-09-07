import React  from 'react'

export default({ book }) => {

  return (
    <div>
      <hr /> 
      <h3>{book.title}</h3>
      <hr />
      <div id="book-details">
        <p>Author: {book.author} | Rating: ${book.rating} | Notes: {book.notes}</p>
      </div>
    </div>
  )
}
