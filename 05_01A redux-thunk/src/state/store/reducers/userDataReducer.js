import * as actions from '../actionTypes';

const initialState = {
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    borrowedBooks: []
}

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SAVE_USER_DATA:
            return {
                ...state,
                fullName: action.payload.fullName || state.fullName,
                email: action.payload.email || state.email,
            }

        case actions.BORROW_BOOKS:
            return {
                ...state,
                borrowedBooks: [ ...state.borrowedBooks, ...action.payload ]
            }

        case actions.RETURN_BOOK:
            return {
                ...state,
                borrowedBooks: state.borrowedBooks.filter( b => b.id !== action.payload.id )
            }

        default:
            return state;
    }
}

export default userDataReducer;