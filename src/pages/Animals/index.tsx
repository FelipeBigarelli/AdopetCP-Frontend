import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import { usePost } from '../../hooks/post';
import api from '../../services/api';
import maskPhone from '../../utils/maskPhone';

import {
  Container,
  Content,
  Filter,
  AllPosts,
  Post,
  PostContent,
} from './styles';

interface ICategoriesDTO {
  id?: string;
  category_name: string;
}

const Animals: React.FC = () => {
  const { categories, allPosts } = usePost();
  const [category, setCategory] = useState<string>();

  const handleChangeCategory = useCallback(async (category_name: string) => {
    const changeCategory = await api
      .get('/posts/list-by-category', {
        params: {
          category_name,
        },
        data: category_name,
      })
      .then(response => {
        setCategory(response.data);

        console.log(response.data);
      });

    return changeCategory;
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <>
      <Header />

      <Container>
        <h1>Postagens</h1>
        <Content>
          <Filter>
            <h3>Filtrar por categoria</h3>
            <select id="categories" onChange={() => handleChangeCategory}>
              <option key="selecione" value="Selecione">
                Selecione
              </option>

              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </Filter>
          <AllPosts>
            {allPosts.map(post => (
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
          </AllPosts>
          {/* <h1>Categorias</h1>

          <Categories>
            {categories.map(category => (
              <h3 key={category.id}>{category.category_name}</h3>
            ))}
          </Categories> */}
        </Content>
      </Container>
    </>
  );
};

export default Animals;
