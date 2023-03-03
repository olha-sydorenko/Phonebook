import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ContactsPage from 'pages/ContactsPage';

import { StyledNavLink } from './App.styled';
import { selectIsLoggedIn, selectUserData } from 'redux/user/userSelectors';
import { logOutRequest } from 'redux/operations/operations';
import HomePage from 'pages/HomePage';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
              <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};
