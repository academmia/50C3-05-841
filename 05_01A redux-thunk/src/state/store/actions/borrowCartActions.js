import * as actions from '../actionTypes';

export function addToBorrowCart(book) {
    return {
      type: actions.ADD_BOOK_TO_BORROW_CART,
      payload: book  
    }
}

export function clearBorrowCart() {
    return {
      type: actions.BORROW_CART_CLEAR
    }
}


