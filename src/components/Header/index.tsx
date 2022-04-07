import React from 'react';
import { slide as MenuBurger } from 'react-burger-menu';

import { Container, Menu } from './styles';

import logoImg from '../../assets/logo.png';
import userAvatar from '../../assets/eu.jpeg';

const Header: React.FC = () => {
  return (
    <Container>
      <MenuBurger className="content">
        <img src={userAvatar} alt="Avatar" />

        <Menu>
          <a className="menu-item" href="/animals">
            Animais
          </a>
          <a className="menu-item" href="/new-post">
            Nova Postagem
          </a>
          <a className="menu-item" href="/about">
            Sobre o AdopetCP
          </a>
        </Menu>

        <img src={logoImg} alt="AdopetCP" />
      </MenuBurger>
    </Container>
  );
};

export default Header;
