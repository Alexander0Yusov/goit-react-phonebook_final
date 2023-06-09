import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { contactsDBReducer } from './contactsDB/contactsDBSlice';

export const reducer = combineReducers({
  contactsDBCombine: contactsDBReducer,
  filterCombine: filterReducer,
});

// вариант
// export const reducer = {
//   contactsDBCombine: contactsDBReducer,
//   filterCombine: filterReducer,
// };
