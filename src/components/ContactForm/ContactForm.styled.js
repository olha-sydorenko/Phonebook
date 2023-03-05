import styled from 'styled-components';

export const Form = styled.form`
  display: inline-block;
  margin: 30px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: lightgrey;
`;
export const FormTitle = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: 14px;
  display: block;

  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
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
  background-color: white;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 14px;
  width: 100px;
  height: 30px;
`;
