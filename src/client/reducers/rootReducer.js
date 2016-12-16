import { combineReducers } from 'redux';

// Import reducers
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  input: inputReducer
});

export default rootReducer;
