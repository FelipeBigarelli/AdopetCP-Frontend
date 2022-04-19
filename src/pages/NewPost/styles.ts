import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #d200ff;

  h1 {
    color: #fff;
    padding-bottom: 32px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  max-width: 800px;

  display: flex;
  justify-content: center;

  padding: 16px;
  background: #fff;
  border-radius: 16px;

  /* input[type='file'] {
    display: none;
  } */
`;
