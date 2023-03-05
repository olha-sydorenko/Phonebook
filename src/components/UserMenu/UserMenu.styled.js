import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const MenuText = styled.p`
  font-size: 24px;
  margin: 0;
  color: white;
`;

export const MenuButton = styled.button`
  color: black;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 18px;
  width: 100px;
  height: 40px;
`;
