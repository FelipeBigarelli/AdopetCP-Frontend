import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import petBackgroundImg from '../../assets/pet-dashboard-background-2.png';

import {
  Container,
  Content,
  Welcome,
  LastPosts,
  Post,
  PostContent,
} from './styles';

import { usePost } from '../../hooks/post';
import maskPhone from '../../utils/maskPhone';

const Dashboard: React.FC = () => {
  const { listLastPosts, lastPosts } = usePost();

  useEffect(() => {
    listLastPosts();
  }, [listLastPosts]);

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

          <h2>Últimas postagens</h2>

          <img src={petBackgroundImg} alt="Animals Background" />

          <LastPosts>
            {lastPosts.map(post => (
              <Post key={post.id}>
                <img src="{post.images.image_name}" alt="Animal" />
                <p className="category">{post.category_name}</p>

                <PostContent>
                  <div className="description">
                    <strong>{post.title}</strong>
                    <p>{post.description}</p>
                  </div>

                  <div className="whatsapp">
                    <FaWhatsapp size={24} />
                    <a href={`https://wa.me/${post.phone_number}`}>
                      {maskPhone(post.phone_number)}
                    </a>
                  </div>
                </PostContent>
              </Post>
            ))}
          </LastPosts>
        </Welcome>
      </Content>

      <Footer />
    </Container>
  );
};

export default Dashboard;
