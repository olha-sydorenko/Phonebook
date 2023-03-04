import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ContactsPage from 'pages/ContactsPage';

import { StyledNavLink } from './App.styled';
import { selectIsLoggedIn } from 'redux/user/userSelectors';

import HomePage from 'pages/HomePage';
import { UserMenu } from './UserMenu/UserMenu';
import { getCurrentUserRequest } from 'redux/operations/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <UserMenu />
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
