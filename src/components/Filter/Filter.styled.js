import styled from 'styled-components';

export const FilterWrapper = styled.div`
  text-align: center;
`;

export const FilterText = styled.p`
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: white;
`;

export const Input = styled.input`
  padding-left: 20px;
  margin-bottom: 20px;
  width: 200px;
  height: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  outline: transparent;
  background-color: lightgrey;
  cursor: pointer;
  :focus {
    border: 3px solid #7fabe4;
  }
`;
