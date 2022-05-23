import styled from '@emotion/styled';

export const Spin = styled.div`
  display: flex;
  border: 3px solid #f3f3f3;
  border-top: 3px solid orange;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 2s linear infinite;
  align-items: center;
  text-align: center;
  justify-content: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
