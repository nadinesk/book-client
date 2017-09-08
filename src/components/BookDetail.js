import React  from 'react'

export default({ book }) => {

  return (
    <div>
      <hr /> 
      <h3>{book.title}</h3>
      <hr />
      <div >
        Author: {book.author} | Rating: ${book.rating} | Notes: {book.notes}
      </div>
    </div>
  )
}
