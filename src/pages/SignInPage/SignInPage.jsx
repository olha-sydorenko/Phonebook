import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from 'redux/user/userOperations';

import { UserForm } from 'components/UserForm/UserForm';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsLoggedIn } from 'redux/user/userSelectors';

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      {error !== null && <p>🙀 Something has gone wrong... Message: {error}</p>}
      <UserForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default SignInPage;
