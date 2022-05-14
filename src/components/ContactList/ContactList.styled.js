import styled from '@emotion/styled';

export const SectionList = styled.div`
  /* display: block;
  margin-right: auto;
  margin-left: auto; */
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
