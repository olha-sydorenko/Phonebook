import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { userReducer } from './user/userSlice';
import { filterReducer } from './Filter/filterSlice';

// export const store = configureStore({
//   reducer: {
//     contactsData: contactsReducer,
//     filterData: filterReducer,
//     userData,
//   },
// });

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

//export const persistor = persistStore(store);
