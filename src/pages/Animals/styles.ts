import styled from 'styled-components';

export const Container = styled.div`
  padding: 96px 32px 0 32px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h1 {
    text-shadow: 1px 1px #00d4ff;
    padding-top: 32px;
  }
`;

export const Content = styled.div`
  padding: 32px 0;
`;

export const Filter = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;

  h3 {
    padding-right: 8px;
  }

  select {
    flex: 1;
    border-color: #00d4ff;
    border-radius: 4px;
    background-color: transparent;
  }
`;

export const AllPosts = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  background: #00d4ff;
  border-radius: 8px;

  width: 200px;
  height: 240px;
  margin: 16px 8px 0 8px;

  & + & {
    margin-bottom: 24px;
  }

  p.category {
    font-size: 12px;
    padding: 2px 8px;
    color: #d200ff;
    text-shadow: 1px 1px #000;
  }

  img {
    height: 100%;
    width: 200px;
    border-radius: 8px 8px 0 0;
    border: 2px solid #00d4ff;

    background-color: #fff;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;

  height: 100%;
  margin: 4px 2px 2px;
  padding: 4px;

  .description {
    height: 100%;
    max-height: 80px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 12px;
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
      padding: 4px 4px 4px 0;
    }
  }

  .whatsapp {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      color: #37ff0e;
      margin-right: 4px;
      margin-top: -2px;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const Categories = styled.div``;
