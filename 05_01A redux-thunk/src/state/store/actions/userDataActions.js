import * as actions from '../actionTypes';
import { clearBorrowCart } from './borrowCartActions';

export function saveUserData(user) {
    return {
      type: actions.SAVE_USER_DATA,
      payload: user
    }
}

export function borrowBooks(books) {
    return {
      type: actions.BORROW_BOOKS,
      payload: books
    }
}

export function returnBook(book) {
    return {
      type: actions.RETURN_BOOK,
      payload: book
    }
}

export function borrowBooksAndClearCart(dispatch, books) {
  
    dispatch( borrowBooks(books) );
    dispatch( clearBorrowCart() )
}

