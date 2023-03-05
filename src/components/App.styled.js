import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from 'images/telephone-g427e92d31_1280-min.jpeg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img});
  background-color: darkgrey;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  transition: all 0.3s;
  color: lightgrey;
  font-size: 26px;
  &.active,
  &.hoover {
    color: white;
  }
`;

export const StyledNav = styled.nav`
  padding: 30px 50px 0 50px;
  display: flex;
  justify-content: space-between;
`;

export const SignWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
