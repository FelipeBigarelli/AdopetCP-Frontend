import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 96px 32px 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 36px 0;
  }

  h2 {
    padding-bottom: 16px;
  }

  img {
    height: 400px;
    /* width: 100%; */
  }
`;
