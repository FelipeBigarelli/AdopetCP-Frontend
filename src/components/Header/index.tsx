import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.png';
import adotarImg from '../../assets/adotar.png';
import searchAnimalsImg from '../../assets/search-animals.png';
import aboutImg from '../../assets/about.png';
import userProfileImg from '../../assets/userProfileIcon.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <a className="menu-item" href="/animals">
          <img src={searchAnimalsImg} alt="Procurar animais" />
          Animais
        </a>
        <a className="menu-item" href="/new-post">
          <img src={adotarImg} alt="Adotar" />
          Postar
        </a>

        <a href="/dashboard" className="logo-header">
          <img
            src={logoImg}
            alt="AdopetCP"
            style={{ filter: 'brightness(150%)' }}
          />
        </a>
        <a className="menu-item" href="/about">
          <img src={aboutImg} alt="" />
          Sobre
        </a>

        <a className="menu-item" href="/profile">
          <img src={userProfileImg} alt="" />
          Perfil
        </a>
      </Content>
    </Container>
  );
};

export default Header;
