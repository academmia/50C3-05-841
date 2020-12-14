import { combineReducers } from 'redux'; 

import borrowCartReducer from './borrowCartReducer';
import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
    borrowCart: borrowCartReducer,  // rename - we don't use Reducer name for slice of data
    userData: userDataReducer
});

export default rootReducer;


// similar with a manual function:
/* 
import borrowCartReducer from './borrowCartReducer';
import userDataReducer from './userDataReducer';

export default function rootReducer(state, action) {
  // always return a new object for the root state
  return {
    // the value of `state.borrowCart` is whatever the todos reducer returns
    borrowCart: borrowCartReducer(state.borrowCart, action),
    // For both reducers, we only pass in their slice of the state
    userData: userDataReducer(state.userData, action)
  }
}
 */
