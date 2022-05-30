import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
    color: yellow;
  }
  margin-right: 10px;
`;

export const LinkContacts = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
    color: yellow;
  }
`;
