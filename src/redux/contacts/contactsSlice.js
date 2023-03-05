import { createSlice } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from './contactsOperations';

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
      .addCase(addContactRequest.rejected, rejectHandler)

      .addCase(deleteContactRequest.pending, pendingHandler)
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactRequest.rejected, rejectHandler),
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
