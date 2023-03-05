import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { userReducer } from './user/userSlice';
import { filterReducer } from './filter/filterSlice';

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
