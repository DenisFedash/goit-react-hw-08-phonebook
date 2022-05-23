import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TitleError = styled.h1`
  font-size: 20px;
  display: flex;
  justify-content: center;

  font-weight: bold;
  color: black;
  letter-spacing: 2px;
  padding-top: 35px;
  padding-bottom: 4px;
`;

export const LinkError = styled(Link)`
  margin-left: 10px;
`;
