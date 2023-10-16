import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { contactReducer } from './contactSlice';

export const store = configureStore({
  contacts: contactReducer,
  filters: filterReduser,
});
