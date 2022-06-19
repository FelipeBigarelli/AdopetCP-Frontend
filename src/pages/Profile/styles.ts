import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  padding: 96px 0;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 96px);
  max-width: 1200px;
  margin: 0 auto;

  background: #fff;

  button {
    margin: 32px 0 0 62px;
    padding: 4px 8px;

    border: 1px solid #00d4ff;
    background-color: #00d4ff;
    box-shadow: 0 0 0.5em #ff2000;

    transition: color 0.2s;

    &:hover {
      color: #ffe100;
    }
  }

  h1 {
    padding-top: 32px;
    margin: 0 62px;
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 48px 0;
  width: 100%;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
  }

  label {
    position: relative;
    width: 48px;
    height: 48px;
    left: 40px;
    top: 48px;
    background: #00d4ff;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 96px;
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;
