import styled from 'styled-components';

interface PostButtonProps {
  toggle: () => void;
}

export const Container = styled.div`
  width: 100%;
  padding-top: 96px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  h1 {
    padding: 32px 0;
  }
`;

export const PostsContainer = styled.div`
  width: inherit;
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Post = styled.button`
  width: 400px;
  height: 400px;

  display: flex;
  flex-direction: column;

  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.2s;
  background: #d0ffff;
  margin: 16px 32px;

  &:hover {
    border-color: #d200ff;
  }

  img {
    height: 320px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    margin-bottom: 16px;
  }

  & + div {
    padding-bottom: 32px;
  }
`;

export const ModalPost = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 16px; */

  .description {
    width: inherit;
    padding-bottom: 64px;

    h2 {
      padding-bottom: 4px;
    }

    span {
      color: #696969;
    }
  }

  .address {
    width: inherit;
    display: flex;
    flex-direction: column;

    & > span {
      padding-bottom: 4px;
    }
  }

  .whatsapp {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 16px;

    svg {
      color: #37ff0e;
    }
  }

  /* .whatsapp {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    height: 24px;

    svg {
      height: 22px;
      color: #37ff0e;
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  } */
`;
