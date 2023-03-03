import React from 'react';
import { useDispatch } from 'react-redux';

import { registerRequest } from '../redux/operations/operations';

import { UserForm } from '../components/UserForm/UserForm';

function SignUpPage() {
  const dispatch = useDispatch();

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
