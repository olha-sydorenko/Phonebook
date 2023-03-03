// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Container } from './Container/Container';

// export const App = () => {
//   return (
//     <Container>
//       <h2>Phonebook</h2>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// };

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

import { StyledNavLink } from './App.styled';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Contacts</StyledNavLink>
          <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
          <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<SignInPage />} />

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};
