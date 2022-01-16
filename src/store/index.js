import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './contacts/items-slice';

export const store = configureStore({
  reducer: {
    contacts: itemsReducer,
  },
});
