import React, { useEffect } from 'react';

import Header from '../../components/Header';
import { Container, Content, Welcome } from './styles';

import petBackgroundImg from '../../assets/pet-dashboard-background.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Welcome>
          <h1>
            Seja bem vindo!
            <br />
            Sua felicidade está aqui! Adote um companheiro!
          </h1>

          <img src="" alt="" />
        </Welcome>
      </Content>
    </Container>
  );
};

export default Dashboard;
