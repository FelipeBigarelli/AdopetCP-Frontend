import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
  }

  img {
    height: 88px;
  }

  img:first-child {
    border-radius: 50%;
  }

  img:last-child {
    height: 88px;
    background: #fff;
    border-radius: 15%;

    margin-bottom: 40px;
  }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #d200ff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    width: auto !important;
  }

  /* General sidebar styles */
  .bm-menu {
    width: 300px;
    background: #d200ff;
    padding: 40px 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Individual item */
  .bm-item {
    display: flex !important;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  /* width: 100%; */

  a {
    font-size: 20px;
    text-decoration: none;

    color: #fff;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;

    width: 100%;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s;

    &:hover {
      background: #fff;
      color: #ff9000;
      border-radius: 16px;
      box-shadow: 0 8px 18px -1px #ff9000;
      backdrop-filter: blur(10px);
    }
  }
`;
