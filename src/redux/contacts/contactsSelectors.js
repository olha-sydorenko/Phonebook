import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelector';

export const selectContacts = state => state.contacts.contacts;
export const selectContactsSatus = state => state.contacts.status;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);
