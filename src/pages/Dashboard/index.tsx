import React from 'react';
import Header from '../../components/Header';

import { Container, Content } from './styles';

import dashboardImg from '../../assets/pet-dashboard-background.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <h1>
          Seja bem vindo!
          <br />
          Sua felicidade está aqui! Adote um companheiro!
        </h1>

        <img src={dashboardImg} alt="Animals Background" />
      </Content>
    </Container>
  );
};

export default Dashboard;
