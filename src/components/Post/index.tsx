import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container, PostContent } from './styles';

// interface IPostProps {
//   id?: string;
//   title: string;
//   description: string;
//   photo: string;
//   phone_number: string;
//   cep?: string;
//   city?: string;
//   district?: string;
//   street?: string;
//   house_number?: string;
// }

// interface IProps {
//   post: IPostProps;
// }

const Post: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      {/* <img src={post.photo} alt="Animal" />

      <PostContent>
        <div className="description">
          <strong>{post.title}</strong>
          <p>{post.description}</p>
        </div>

        <div className="whatsapp">
          <FaWhatsapp size={24} />
          <p>{post.phone_number}</p>
        </div>
      </PostContent> */}
    </Container>
  );
};

export default Post;
