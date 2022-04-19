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

  background: #ff0000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;

  a img {
    height: 72px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;

  padding: 0 32px;

  a {
    padding: 16px;
    font-size: 20px;
    text-decoration: none;

    color: #fff;
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
