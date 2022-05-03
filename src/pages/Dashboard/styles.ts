import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 96px 0;

  background: #d200ff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  height: calc(100vh - 96px);
  width: 100%;
  max-width: 1200px;

  background: #fff;
`;

export const Welcome = styled.div`
  /* width: 100%;
  height: 100%;
  max-width: 1200px;

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
  } */
`;
