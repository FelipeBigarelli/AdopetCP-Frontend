import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';

import {
  Container,
  Content,
  LastPosts,
  Post,
  PostContent,
  PostDescription,
} from './styles';

import catImg from '../../assets/cat.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <LastPosts>
          <Post>
            <img src={catImg} alt="AnimalImage" />
            <PostContent>
              <PostDescription>
                <strong>Gato macho</strong>
                <p>18 meses</p>
              </PostDescription>

              <div>
                WhatsApp
                <FaWhatsapp size={12} />
              </div>
            </PostContent>
          </Post>

          <Post>
            <img src={catImg} alt="AnimalImage" />
            <PostContent>
              <PostDescription>
                <strong>Gato macho</strong>
                <p>18 meses</p>
              </PostDescription>

              <div>
                WhatsApp
                <FaWhatsapp size={12} />
              </div>
            </PostContent>
          </Post>

          <Post>
            <img src={catImg} alt="AnimalImage" />
            <PostContent>
              <PostDescription>
                <strong>Gato macho</strong>
                <p>18 meses</p>
              </PostDescription>

              <div>
                WhatsApp
                <FaWhatsapp size={12} />
              </div>
            </PostContent>
          </Post>

          <Post>
            <img src={catImg} alt="AnimalImage" />
            <PostContent>
              <PostDescription>
                <strong>Gato macho</strong>
                <p>18 meses</p>
              </PostDescription>

              <div>
                WhatsApp
                <FaWhatsapp size={12} />
              </div>
            </PostContent>
          </Post>
        </LastPosts>
      </Content>
    </Container>
  );
};

export default Dashboard;
