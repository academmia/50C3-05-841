import Book from "./Book";

const Books = props => {
    return (
        <div className="flex three book-list">
            {
                [1,2,3,4,5].map( item => (<Book key={item} item={item} />) )
            }
        </div>
    )
}

export default Books;
