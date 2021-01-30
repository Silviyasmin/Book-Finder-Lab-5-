import React from 'react';
import Book from './Book';

const BookList = (props) => {
    console.log(props.books);
    return (
        <div className="container" flex-basis= "auto">
            <div className="row">
                <div className="col s12" >
                    {props.books.map((book, i) => {
                        return <Book
                            book={book}
                            key={i}
                            image = {book.volumeInfo.imageLinks.thumbnail}
                            title = {book.volumeInfo.title}
                            author = {book.volumeInfo.authors}
                            published = {book.volumeInfo.publishedDate}
                            description = {book.volumeInfo.description}
                            props = {props} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookList;