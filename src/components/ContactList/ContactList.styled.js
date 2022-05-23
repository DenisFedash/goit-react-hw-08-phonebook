import styled from '@emotion/styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const SectionList = styled.div`
  /* position: relative; */
`;

export const List = styled.ul`
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  background-color: lightgray;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ButtonList = styled.button`
  width: 60px;
  height: auto;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;

export const AddButton = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: orange;
  }

  svg {
    vertical-align: middle;
  }
`;
