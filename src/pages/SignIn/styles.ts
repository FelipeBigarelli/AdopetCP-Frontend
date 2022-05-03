import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/signInBackground.jpg';

export const Container = styled.div`
  height: 100vh;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  animation: ${appearFromLeft} 0.5s;

  form {
    padding: 40px;

    width: 100%;
    max-width: 400px;

    box-shadow: 0 15px 25px rgba(129, 124, 124, 0.6);
    border: 2px solid #d200ff;
    box-shadow: 0 8px 18px -1px #d200ff;
    border-radius: 32px 0px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      text-align: center;
    }

    button {
      padding: 16px;
      margin: 16px 0;
      width: 100%;
      height: 56px;
      font-weight: 500;

      border-radius: 10px;
      border: none;
      background: #ff9000;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    > a {
      color: #000;
      font-weight: 500;
      text-decoration: none;

      display: block;
      margin-top: 24px;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  > a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    margin-top: 24px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  img {
    height: 64px;
  }
`;
