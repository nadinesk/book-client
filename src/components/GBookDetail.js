import React  from 'react'

export default({ book }) => {

  return (
    <div>
      <hr /> 
      <h3>{book.volumeInfo.title}</h3>
      <hr />
      <div >
        <div><h5>Author:</h5> {book.volumeInfo.authors} </div>
        <div><h5>Published:</h5> {book.volumeInfo.publishedDate} </div>        
        <div><h5>Description:</h5>{book.volumeInfo.description}</div>
      </div>
    </div>
  )
}


//volumeInfo.title
