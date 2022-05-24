import React from 'react';

import { Container, Content, FooterImg, FooterMenu } from './styles';

import logoImg from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <FooterImg>
          <img src={logoImg} alt="" />
        </FooterImg>

        <FooterMenu>
          <a href="/about">Sobre o AdopetCP</a>
        </FooterMenu>
      </Content>
    </Container>
  );
};

export default Footer;
