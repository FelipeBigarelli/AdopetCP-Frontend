import React from 'react';

import { Container, Content, Menu } from './styles';

import logoImg from '../../assets/logo.png';
import userAvatar from '../../assets/eu.jpeg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="AdopetCP" />

        <Menu>
          <a href="/dashboard">Home</a>
          <a href="/animals">Animais</a>
          <a href="/about">Sobre o AdopetCP</a>
        </Menu>

        <img src={userAvatar} alt="Avatar" />
      </Content>
    </Container>
  );
};

export default Header;
