import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  background: #d200ff;

  img {
    height: 64px;

    &:first-child {
      filter: contrast(500%);
    }

    &:last-child {
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  height: inherit;
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #fff;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
