import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

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
  width: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 16px;
  background: #00d4ff;
  border-radius: 16px;

  label {
    width: 320px;
    height: 320px;
    background: transparent;

    border-radius: 16px;
    border: 2px dashed #fff;
    cursor: pointer;

    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 64px;
      height: 64px;
      color: #312e38;
      transition: padding 0.2s;
    }

    &:hover {
      border-color: #000;
      background-color: #fff;

      svg {
        padding: 8px;
      }
    }
  }
`;