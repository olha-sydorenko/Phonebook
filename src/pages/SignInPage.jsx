import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { loginRequest } from '../redux/operations/operations';
// import { selectAuthError, selectIsLoggedIn } from 'redux/userSlice/selectors';

import { UserForm } from '../components/UserForm/UserForm';

function SignInPage() {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const error = useSelector(selectAuthError);

  //   useEffect(() => {
  //     if (!isLoggedIn) return;

  //     navigate('/contacts');
  //   }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      {/* {error !== null && (
        <Alert>
          <p>Oops, some error occured... {error}</p>
        </Alert>
      )} */}
      <UserForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default SignInPage;
