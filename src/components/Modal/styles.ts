import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    flex: 1;
  }

  h1 {
    font-size: 24px;
    text-shadow: 1px 1px #00d4ff;

    padding-bottom: 8px;
  }

  p {
    margin-top: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 12px;
  }

  .editprofile-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 50%;
    padding: 8px;

    background-color: #00d4ff;
    border: none;
    border-radius: 0 8px 0 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;

    text-shadow: 1px 1px #ff2000;
    transition: color 0.2s;

    &:hover {
      color: #ffe100;
    }
  }
`;
