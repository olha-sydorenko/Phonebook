import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/user/userSelectors';
import { logOutRequest } from 'redux/operations/operations';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <div>
      <p>{userData.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
