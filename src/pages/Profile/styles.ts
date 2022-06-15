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
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Post = styled.div`
  width: 360px;
  min-width: 360px;
  height: 380px;

  display: flex;
  flex-direction: column;

  border: 1px solid #00d4ff;
  background-color: #00d4ff;

  border-radius: 8px;
  transition: all 0.2s;
  margin: 16px 32px;

  &:hover {
    border-color: #d200ff;
    box-shadow: 0 0 0.5em #ff2000;
  }

  img {
    /* min-height: 240px; */
    height: 240px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    margin-bottom: 4px;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 2px 2px;

  .post-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: inherit;
    align-items: center;
    justify-content: space-between;

    background: #fff;
    border-radius: 4px;

    .description {
      width: inherit;
      height: 90px;
      padding: 4px;

      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 10px;
        height: 12px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 20px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #fff; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 2px solid #d200ff;
        padding-bottom: 4px;
      }

      strong {
        font-size: 22px;
        margin-bottom: 8px;
      }

      p {
        word-wrap: break-word;
        color: #696969;
        padding: 1px;
      }
    }
  }
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 6px;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  #whatsapp {
    display: flex;
    width: inherit;
    justify-content: flex-end;
    align-items: center;

    svg {
      height: 22px;
      color: #37ff0e;
    }
  }
`;
