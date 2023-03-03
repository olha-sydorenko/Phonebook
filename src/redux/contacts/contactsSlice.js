import { createSlice } from '@reduxjs/toolkit';
import {
  addContactRequest,
  getContactsRequest,
} from 'redux/operations/operations';

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder

      .addCase(getContactsRequest.pending, pendingHandler)
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = action.payload;
      })
      .addCase(getContactsRequest.rejected, rejectHandler)

      .addCase(addContactRequest.pending, pendingHandler)
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactRequest.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.status = 'rejected';
  state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { getContacts, addContact, deleteContact } from 'operations/operations';

// const initialState = {
//   contacts: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {},

//   extraReducers: builder =>
//     builder
//       .addCase(getContacts.pending, pendingHandler)
//       .addCase(getContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.contacts = action.payload;
//       })
//       .addCase(getContacts.rejected, rejectHandler)

//       .addCase(addContact.pending, pendingHandler)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.contacts = [...state.contacts, action.payload];
//       })
//       .addCase(addContact.rejected, rejectHandler)

//       .addCase(deleteContact.pending, pendingHandler)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.contacts = state.contacts.filter(
//           contact => contact.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, rejectHandler),
// });

// function pendingHandler(state) {
//   state.isLoading = true;
//   state.error = null;
// }
// function rejectHandler(state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// }

// // export const { appendContact, removeContact, setFilter } =
// //   contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
