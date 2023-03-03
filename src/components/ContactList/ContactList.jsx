import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.styled';

import { Contact } from 'components/Contact/Contact';
import {
  selectContacts,
  //selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';
import { getContactsRequest } from 'redux/operations/operations';
import { selectError, selectStatus } from 'redux/user/userSelectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  //const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);

  return (
    <>
      {status === 'pending' && <p>Loading in progress</p>}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <List>
        {contacts?.length > 0 &&
          contacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
      </List>
    </>
  );
};
