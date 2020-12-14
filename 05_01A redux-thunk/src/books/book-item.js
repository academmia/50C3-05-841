import AuthEnable from "../state/context/AuthEnable";
import { useDispatch } from "react-redux";

// import { addToBorrowList } from "../state/store/actions/borrowListActions";
import { addToBorrowCart } from "../state/store/actions/borrowCartActions";

const BookItem = ({ item, addToList }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <article className="card">
                <header>
                    <h3>{item.name}</h3>
                </header>
               
                <p> {item.description} </p>
                
                <footer>
                    <AuthEnable>
                        <button onClick={ () => dispatch( addToBorrowCart(item) ) }>Add</button>
                        {/* <button onClick={ () => addToList(item) }>Add</button> */}
                    </AuthEnable> 
                </footer>
            </article>
        </div>
    )
}

export default BookItem; 
