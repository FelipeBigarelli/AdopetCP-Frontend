import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 96px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 64px;
  margin: 0 auto;

  width: 100%;
  max-width: 1200px;

  background: #fff;
`;

export const Welcome = styled.div`
  h1 {
    padding-bottom: 64px;
  }

  h2 {
    padding-bottom: 80px;
  }

  .dashboard-img {
    position: absolute;
    margin-top: -169px;
  }
`;

export const LastPosts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  border-radius: 8px;
  padding: 12px 0 0 0;
  background: #00d4ff;

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
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  width: 200px;
  height: 240px;
  margin: 0 8px;

  p.category {
    font-size: 12px;
    padding-left: 10px;
    color: #d200ff;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 8px 8px 0 0;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;

  .description {
    strong {
      font-size: 22px;
      margin-bottom: 8px;
    }

    p {
      color: #696969;
      padding: 4px 0;
    }
  }

  .whatsapp {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      color: #37ff0e;
      margin-right: 4px;
    }
  }
`;
