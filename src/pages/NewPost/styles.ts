import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  h1 {
    padding: 32px 0;
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
  background: #00d4ff;
  border-radius: 16px;
`;
