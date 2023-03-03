import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
//import { Filter } from 'components/Filter/Filter';
import React from 'react';

function ContactsPage() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactList />
    </Container>
  );
}

export default ContactsPage;
