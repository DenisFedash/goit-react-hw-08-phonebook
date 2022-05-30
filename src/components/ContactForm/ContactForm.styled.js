import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: green;
`;

export const Container = styled.form`
  margin-bottom: 30px;
  margin-top: 5px;
`;

export const TextName = styled.label`
  display: block;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  width: 350px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  :focus {
    outline-color: blueviolet;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 10px 20px;

  height: 45px;
  background-color: teal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  :hover {
    background-color: #bc9428;
  }
`;
