import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '../../components/Header';
// import Post from '../../components/Post';

import {
  Container,
  Content,
  PostsContainer,
  Post,
  ModalPost,
  PostContent,
} from './styles';
import { useModal } from '../../hooks/modal';
import Modal from '../../components/Modal';
import api from '../../services/api';
import maskPhone from '../../utils/maskPhone';

interface Posts {
  id?: string;
  title: string;
  description: string;
  photo: string;
  phone_number: string;
  cep?: string;
  city?: string;
  district?: string;
  street?: string;
  house_number?: string;
  category_name?: string;
}

const Profile: React.FC = () => {
  const { isShown, toggle } = useModal();
  const [userPosts, setUserPosts] = useState<Posts[]>([]);

  useEffect(() => {
    api.get<Posts[]>('/posts/user-posts').then(response => {
      const postsFormatted = response.data.map(post => {
        const phoneNumberFormatted = maskPhone(post.phone_number);

        return {
          ...post,
          phone_number: phoneNumberFormatted,
        };
      });

      setUserPosts(postsFormatted);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Minhas postagens</h1>

          <PostsContainer>
            {userPosts.map(post => (
              <>
                <Modal isShown={isShown} hide={toggle}>
                  <ModalPost key={post.id}>
                    <img src={post.photo} alt="Animal" />
                    <p>{post.category_name}</p>

                    <PostContent>
                      <div className="description">
                        <h2>{post.title}</h2>
                        <span>{post.description}</span>
                      </div>

                      <div className="address">
                        <span>CEP: {post.cep}</span>
                        <span>Cidade: {post.city}</span>
                        <span>Bairro: {post.district}</span>
                        <span>Rua: {post.street}</span>
                        <span>Número: {post.house_number}</span>
                      </div>

                      <div className="whatsapp">
                        <FaWhatsapp size={24} />
                        <span>{post.phone_number}</span>
                      </div>
                    </PostContent>
                  </ModalPost>
                </Modal>

                <Post onClick={toggle} key={post.id}>
                  <img src={post.photo} alt="Animal" />

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
              </>
            ))}
          </PostsContainer>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
