import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import IPostDTO from './dtos/IPostDTO';

import { Container, Content, Footer } from './styles';
import img from '../../assets/cat.png';
import maskPhone from '../../utils/maskPhone';

interface IPostProps {
  post: IPostDTO;
}

const Post: React.FC<IPostProps> = ({ post }: IPostProps) => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={img} id="post-images" alt="Animal" />
      <p className="category">{post.category_name}</p>

      <Content>
        <div className="description">
          <strong>{post.title}</strong>
          <p>{post.description}</p>
        </div>

        <Footer>
          <img src={user.avatar_url} alt="Avatar" />

          <div className="whatsapp">
            <FaWhatsapp size={24} />
            <a href={`https://wa.me/${post.phone_number}`}>
              {maskPhone(post.phone_number)}
            </a>
          </div>
        </Footer>
      </Content>
    </Container>
  );
};

export default Post;
