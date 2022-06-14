import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import { usePost } from '../../hooks/post';
import api from '../../services/api';
import maskPhone from '../../utils/maskPhone';

import { Container, Content, Categories } from './styles';

const Animals: React.FC = () => {
  const { categories } = usePost();

  return (
    <>
      <Header />

      <Container>
        <Content>
          <h1>Categorias</h1>

          <Categories>
            {categories.map(category => (
              <h3 key={category.id}>{category.category_name}</h3>
            ))}
          </Categories>
        </Content>
      </Container>
    </>
  );
};

export default Animals;
