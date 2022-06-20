import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #00d4ff;
  border-radius: 8px;

  width: 240px;
  height: auto;
  margin: 16px 8px 0 8px;

  transition: all 0.2s;

  .rec-carousel-wrapper {
    height: auto;
    min-height: 195px;
  }

  .carousel {
    .rec-slider-container {
      margin: 0 2px;
    }

    .rec-arrow {
      display: none;
    }
  }

  p.category {
    font-size: 12px;
    padding: 2px 8px;
    color: #ffe100;
    text-shadow: 1px 1px #ff0000;
  }

  img {
    height: 160px;
    width: inherit;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    border: 2px solid #00d4ff;

    background-color: #fff;
  }

  &:hover {
    border-color: #d200ff;
    box-shadow: 0 0 0.5em #00d4ff;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${shade(0.05, '#fff')};
  border-radius: 8px;

  height: 120px;
  margin: 4px 2px 2px;
  padding: 4px;

  .description {
    height: 100%;
    max-height: 88px;
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 6px 0 4px;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: none;
    background: transparent;
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
