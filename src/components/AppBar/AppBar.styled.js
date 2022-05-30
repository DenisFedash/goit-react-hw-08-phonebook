import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
    color: yellow;
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
