import React from 'react'
import Book from './Book'

export default function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]
    // a array of objects with multiple properties
    const books = [
        // object
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        //  object
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        // object
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        }
    ]
  return (
    <div>
        {/* .map method  */}
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr/>
        {
            books.map(book => {
                return (
                    <div>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            } )
        }
        <hr/>
        {/* rendering React components by passing array objects as props */}
        {
            books.map(book => {
                return <Book book={book} />
            })
        }
    </div>
  )
}
