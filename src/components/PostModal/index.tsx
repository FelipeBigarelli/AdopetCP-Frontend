import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import { usePost } from '../../hooks/post';
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
      <img src={img} alt="PostImage" />

      <Content>
        <div className="post-content">
          <div className="description">
            <strong>
              {post.title}
              <span>{post.category_name}</span>
            </strong>
            <p>{post.description}</p>
          </div>

          <Footer>
            <img src={user.avatar_url} alt="Avatar" />

            <div id="address">
              <span>
                {post.city} - {post.cep}
              </span>
              <span>
                {post.district} - {post.street}: {post.house_number}
              </span>
            </div>

            <div id="whatsapp">
              <FaWhatsapp size={24} />
              <a href={`https://wa.me/${post.phone_number}`}>
                {maskPhone(post.phone_number)}
              </a>
            </div>
          </Footer>
        </div>
      </Content>
    </Container>
  );
};

export default Post;
