import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerRequest } from '../redux/operations/operations';

import { UserForm } from '../components/UserForm/UserForm';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/userSelectors';

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      <UserForm onSubmit={handleRegister} />
    </div>
  );
}

export default SignUpPage;
