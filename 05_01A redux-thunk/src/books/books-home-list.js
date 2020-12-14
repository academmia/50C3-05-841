import { useEffect, useState } from "react";
import BookItem from "./book-item";

const BooksHomeList = ({addToList}) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3344/books`)
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="flex three book-list">
            {
                books.map( item => (<BookItem key={item.id} item={item} addToList={ () => addToList(item) } />) )
            }
        </div>
    )
}

export default BooksHomeList;
