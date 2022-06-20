import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';

import { useAuth } from '../../hooks/auth';
import IPostDTO from './dtos/IPostDTO';

import { Container, Content, Footer } from './styles';
import img from '../../assets/cat.png';
import maskPhone from '../../utils/maskPhone';
import IPostImagesDTO from './dtos/IPostImagesDTO';

interface IPostProps {
  post: IPostDTO;
}

const Post: React.FC<IPostProps> = ({ post }: IPostProps) => {
  const { user } = useAuth();
  const [imgArray, setImgArray] = useState<IPostImagesDTO[]>([]);

  const getImages = useCallback(() => {
    if (post.images) {
      setImgArray(post.images);
    }
  }, [post.images]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <Container>
      <Carousel isRTL className="carousel">
        {imgArray &&
          imgArray?.map(item => (
            <img
              src={item.image_url}
              key={item.id}
              id="post-images"
              alt="Animal"
            />
          ))}

        {/* <img src={img} alt="DefaultImg" /> */}
      </Carousel>

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
