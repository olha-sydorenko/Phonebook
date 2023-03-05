import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerRequest } from 'redux/user/userOperations';

import { UserForm } from '../../components/UserForm/UserForm';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsLoggedIn } from 'redux/user/userSelectors';

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      {error !== null && <p>🙀 Something has gone wrong... Message: {error}</p>}
      <UserForm onSubmit={handleRegister} />
    </div>
  );
}

export default SignUpPage;
