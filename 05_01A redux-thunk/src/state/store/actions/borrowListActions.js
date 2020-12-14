import * as actions from '../actionTypes';

export function addToBorrowList(book) {
    return {
      type: actions.ADD_BOOK_TO_BORROW_LIST,
      book  
    }
}


