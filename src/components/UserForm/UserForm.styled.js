import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  margin: 100px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: lightgrey;
`;

export const FormTitle = styled.h2`
  margin: 0 auto;
  color: black;
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
  width: 250px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
`;

export const Input = styled.input`
  padding-left: 10px;
  width: 250px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 4px;
  outline: transparent;
  cursor: pointer;
  :focus {
    border: 3px solid #7fabe4;
  }
`;

export const AddButton = styled.button`
  color: black;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 16px;
  width: 80px;
  height: 40px;
`;
