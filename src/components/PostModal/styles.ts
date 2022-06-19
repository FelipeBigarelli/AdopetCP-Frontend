import styled from 'styled-components';

export const Container = styled.div`
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
    box-shadow: 0 0 0.5em #00d4ff;
  }

  img {
    height: 240px;
    width: 100%;
    border-radius: 8px 8px 0 0;
    margin-bottom: 4px;
  }
`;

export const Content = styled.div`
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
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 12px;
          color: #d200ff;
        }
      }

      p {
        word-wrap: break-word;
        color: #696969;
        padding: 1px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 6px;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  #address {
    padding: 0 6px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;

    height: 100%;
    max-height: 32px;

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
    }

    span {
      font-size: 14px;
      padding-right: 8px;
    }
  }

  #whatsapp {
    display: flex;
    align-items: center;
    padding-left: 8px;

    svg {
      height: 22px;
      color: #37ff0e;
    }
  }
`;
