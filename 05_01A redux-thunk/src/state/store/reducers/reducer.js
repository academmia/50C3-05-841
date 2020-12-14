import * as actions from '../actionTypes';

const reducer = (state = {}, action) => {

    switch (action.type) {
        case actions.ADD_BOOK_TO_BORROW_LIST:
            return { 
                ...state, 
                listToBorrow: [ ...state.listToBorrow, action.book] 
            }

        default:
            return state;
    }

}

export default reducer;
