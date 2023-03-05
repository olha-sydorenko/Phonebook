import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.styled';

import { Contact } from 'components/Contact/Contact';
import {
  selectContactsError,
  selectContactsSatus,
  selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';
import { getContactsRequest } from 'redux/contacts/contactsOperations';
import { selectIsLoggedIn } from 'redux/user/userSelectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  //const contacts = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectContactsSatus);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [isLoggedIn, dispatch]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {error !== null && <p>🙀 Something has gone wrong... Message: {error}</p>}
      <List>
        {contacts?.length > 0 &&
          contacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
      </List>
    </>
  );
};
