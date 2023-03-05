import React, { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, StyledNavLink, StyledNav, SignWrapper } from './App.styled';
import { selectIsLoggedIn } from 'redux/user/userSelectors';

import { UserMenu } from './UserMenu/UserMenu';
import { getCurrentUserRequest } from 'redux/operations/operations';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      <header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <UserMenu />
            </>
          ) : (
            <SignWrapper>
              <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
              <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
            </SignWrapper>
          )}
        </StyledNav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </Wrapper>
  );
};
