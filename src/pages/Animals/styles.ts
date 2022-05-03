import styled from 'styled-components';

export const Container = styled.div`
  padding: 96px 32px 0 32px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h2 {
    padding: 32px 0;
  }
`;

export const Content = styled.div`
  /* margin: 0 auto;
  width: 100%; */
`;

export const LastPosts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  border-radius: 8px;
  padding: 12px 0 0 0;
  background: #ff0000;

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

export const Categories = styled.div`
  padding: 64px 0 32px 0;
`;
