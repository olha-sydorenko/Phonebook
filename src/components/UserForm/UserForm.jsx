import React, { useRef } from 'react';
import { Form, FormTitle, Label, Input, AddButton } from './UserForm.styled';

export const UserForm = ({ onSubmit, isLoginForm = false }) => {
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
        <FormTitle>{isLoginForm ? 'Sign In' : 'Sign Up'}</FormTitle>
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
