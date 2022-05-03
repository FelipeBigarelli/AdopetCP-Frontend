import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '../../components/Header';
import { usePost } from '../../hooks/post';

import {
  Container,
  Content,
  PostsContainer,
  Post,
  ModalPost,
  PostContent,
} from './styles';
import { useModal } from '../../hooks/modal';

const Profile: React.FC = () => {
  const { isShown, toggle } = useModal();
  const { listPost, userPosts } = usePost();

  useEffect(() => {
    listPost();
  }, [listPost]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Minhas postagens</h1>

          <PostsContainer>
            {userPosts.map(post => (
              <>
                <Post onClick={toggle} key={post.id}>
                  <img src={post.images.image_name} alt="Animal" />
                  {console.log(post.images.image_name)}
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
