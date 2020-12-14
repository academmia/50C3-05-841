import * as actions from '../actionTypes';

const borrowCartReducer = (state = [], action) => {

    switch (action.type) {
        case actions.ADD_BOOK_TO_BORROW_CART:
            return [ ...state, action.payload ] 
       
        case actions.BORROW_CART_CLEAR:
            return [ ] 

        default:
            return state;
    }

}

export default borrowCartReducer;
