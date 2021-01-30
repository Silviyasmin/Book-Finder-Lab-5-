import axios from 'axios';

const APIKey = "AIzaSyBO-HIByQ5uHk5-bjEm1t9w1on02SGyWVU";


const GoogleBooksAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks,  startIndex, setTotalPages) => {

    console.log("Start Index "+ startIndex);
    GoogleBooksAPI.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            startIndex: startIndex,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/20));
    })
}

const getBookDetails = (book_id, setCurrentBook) => {
    console.log("API " +book_id);
    GoogleBooksAPI.get(''+book_id)
        .then((response) => {
            console.log("book ", response.data);
            setCurrentBook(response.data);
        });
}

export  {getBooksByTerm, getBookDetails};