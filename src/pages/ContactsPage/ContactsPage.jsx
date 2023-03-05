import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import React from 'react';

function ContactsPage() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

export default WithAuthRedirect(ContactsPage, '/sign-in');
