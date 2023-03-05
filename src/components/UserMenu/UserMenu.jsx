import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/user/userSelectors';
import { logOutRequest } from 'redux/user/userOperations';
import { UserMenuWrapper, MenuText, MenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <UserMenuWrapper>
      <MenuText>{userData.email}</MenuText>
      <MenuButton onClick={handleLogOut}>Logout</MenuButton>
    </UserMenuWrapper>
  );
};
