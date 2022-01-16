import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { itemsReducer } from './contacts/items-slice';
import { filterReducer } from './contacts/filter-slice';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
