import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import api from '../../services/api';
import maskPhone from '../../utils/maskPhone';

import { Container, Content, Categories } from './styles';

const Animals: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <Categories>Categorias</Categories>
        </Content>
      </Container>
    </>
  );
};

export default Animals;
