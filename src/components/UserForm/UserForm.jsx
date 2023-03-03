import React, { useRef } from 'react';
//import PropTypes from 'prop-types';

import { Form, Label, Input, AddButton } from './UserForm.styled';

export const UserForm = ({ onSubmit, isLoginForm = false }) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  // const handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const formData = {
  //   name,
  //   email,
  //   password,
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   setName('');
  //   setEmail('');
  //   setPassword('');

  //   dispatch(addUser(formData));
  // };

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
        {isLoginForm ? null : (
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={nameInputRef}
              required
            />
          </Label>
        )}
        <Label>
          Email
          <Input
            type="tel"
            name="email"
            placeholder="Enter your email"
            ref={emailInputRef}
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="tel"
            name="password"
            minLength={7}
            placeholder="Enter your password"
            ref={passwordInputRef}
            required
          />
        </Label>

        <AddButton type="submit">
          {' '}
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </AddButton>
      </Form>
    </div>
  );
};