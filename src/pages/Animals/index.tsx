import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import api from '../../services/api';
import maskPhone from '../../utils/maskPhone';

import {
  Container,
  Content,
  LastPosts,
  PostContent,
  Post,
  Categories,
} from './styles';

const Animals: React.FC = () => {
  const [lastPosts, setLastPosts] = useState<IPostDTO[]>([]);

  useEffect(() => {
    api.get<IPostDTO[]>('/posts/last').then(response => {
      const postsFormatted = response.data.map(post => {
        const phoneNumberFormatted = maskPhone(post.phone_number);

        return {
          ...post,
          phone_number: phoneNumberFormatted,
        };
      });

      setLastPosts(postsFormatted);
    });
  }, []);

  return (
    <>
      <Header />

      <Container>
        <h2>Últimas postagens</h2>
        <Content>
          <LastPosts>
            {lastPosts.map(post => (
              <Post key={post.id}>
                <img src={post.photo} alt="Animal" />
                <p className="category">{post.category_name}</p>

                <PostContent>
                  <div className="description">
                    <strong>{post.title}</strong>
                    <p>{post.description}</p>
                  </div>

                  <div className="whatsapp">
                    <FaWhatsapp size={24} />
                    <p>{post.phone_number}</p>
                  </div>
                </PostContent>
              </Post>
            ))}
          </LastPosts>

          <Categories>Categorias</Categories>
        </Content>
      </Container>
    </>
  );
};

export default Animals;
