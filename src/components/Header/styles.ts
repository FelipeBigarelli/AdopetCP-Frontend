import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 96px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #00d4ff;
  box-shadow: 0 0 1em red;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;

  .logo-header img {
    height: 80px;
    filter: brightness(0%);
    transition: filter 0.2s;
  }

  a {
    padding: 16px;
    font-size: 20px;
    text-decoration: none;

    color: #ff0000;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;

    width: 100%;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    transition: all 0.2s;

    img {
      height: 48px;
      padding-right: 12px;
    }

    &:hover {
      color: #ffe100;
      padding-bottom: 8px;
    }
  }
`;
