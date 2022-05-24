import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  height: 64px;
  width: 100%;

  background: #00d4ff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterImg = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 56px;
    filter: brightness(0%);
  }
`;

export const FooterMenu = styled.div`
  width: 80%;
`;
