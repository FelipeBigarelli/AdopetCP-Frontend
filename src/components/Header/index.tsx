import React from 'react';

import { Container, Content, Menu } from './styles';

import logoImg from '../../assets/logo.png';
import userAvatar from '../../assets/eu.jpeg';
import adotarImg from '../../assets/adotar.png';
import searchAnimalsImg from '../../assets/search-animals.png';
import aboutImg from '../../assets/about.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <a href="/dashboard">
          <img
            src={logoImg}
            alt="AdopetCP"
            style={{ filter: 'brightness(150%)' }}
          />
        </a>
        <Menu>
          <a className="menu-item" href="/animals">
            <img src={searchAnimalsImg} alt="Procurar animais" />
            Procurar Animais
          </a>
          <a className="menu-item" href="/new-post">
            <img src={adotarImg} alt="Adotar" />
            Nova Postagem
          </a>
          <a className="menu-item" href="/about">
            <img src={aboutImg} alt="" />
            Sobre o AdopetCP
          </a>
        </Menu>

        <a href="/profile">
          <img src={userAvatar} alt="Avatar" style={{ borderRadius: '50%' }} />
        </a>
      </Content>
    </Container>
  );
};

export default Header;
