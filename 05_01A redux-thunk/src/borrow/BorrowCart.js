import { connect } from "react-redux";
import { borrowBooks, borrowBooksAndClearCart } from '../state/store/actions/userDataActions';
import { clearBorrowCart, addToBorrowCart } from '../state/store//actions/borrowCartActions';
import { bindActionCreators } from "redux";

const BorrowCart = props => {
    return (
        <header className="hero">

            <article className="card" style={{ backgroundColor: 'transparent' }}>
                <header>
                    <h3>Borrow Cart</h3>
                </header>

                {
                    props.books.map(item => (
                        <p key={item.id}>
                            <button
                                style={{ marginLeft: '1rem' }}> x </button> {item.name} </p>
                    ))
                }

                <footer>
                    {/* 2. Add to UserData.borrowedBooks */}
                    <button onClick={() => borrowBooksAndClearCart(props.dispatch, props.books)}>Finalize</button>
                </footer>

                {/* 1. <footer>
                    <button onClick={ () => { 
                        props.borrowBooks(props.books);
                        props.clearBorrowCart();
                     } }
                        >Finalize</button>
                </footer> */}
            </article>

        </header>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.borrowCart,
    }
}

// 1. shorthand
// const mapDispatchToProps = {
//     // borrow this books from cart and add to UserData
//     borrowBooks, // intern React-Redux apeleaza o functie care leaga dispatch de aceasta actiune ()
//     clearBorrowCart,
//     addToBorrowCartAndClear
// }

// 2.A versiunea care expune dispatch in componenta
// const mapDispatchToProps = (dispatch) => {
//     return Object.assign(bindActionCreators({ 
//         addToBorrowCartAndClear
//     }, dispatch), { dispatch })
// }

// 2.B
const mapDispatchToProps = (dispatch) => {
    return { 
        borrowBooksAndClearCart: () => dispatch( borrowBooksAndClearCart ),
        dispatch
    }
}



// este acelasi lucru cu
/* 
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      borrowBooks: () => dispatch( borrowBooks )
    }
}
 */

export default connect(mapStateToProps, mapDispatchToProps)(BorrowCart);