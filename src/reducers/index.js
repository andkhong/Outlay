import { combineReducers } from 'redux';

import uploadReducer from './uploadReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  uploadReducer,
  searchReducer,
});
