import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { usePost } from '../../hooks/post';

import Header from '../../components/Header';
import Post from '../../components/Post';

import { Container, Content, Filter, AllPosts } from './styles';
import IPostDTO from '../../components/Post/dtos/IPostDTO';

const Animals: React.FC = () => {
  const { categories, allPosts } = usePost();
  const [filterByCategory, setFilterByCategory] = useState('Selecione');

  const handleChangeCategory = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      setFilterByCategory(e.target.value);
    },
    [],
  );

  const getFilteredList = useCallback(() => {
    if (filterByCategory === 'Selecione') {
      return allPosts;
    }

    return allPosts.filter(post => post.category_name === filterByCategory);
  }, [allPosts, filterByCategory]);

  const filteredList: IPostDTO[] = useMemo(() => {
    const filtered = getFilteredList();

    return filtered;
  }, [getFilteredList]);

  return (
    <>
      <Header />

      <Container>
        <h1>Postagens</h1>
        <Content>
          <Filter>
            <h3>Filtrar por categoria</h3>
            <select
              id="categories"
              defaultValue={filterByCategory}
              onChange={e => handleChangeCategory(e)}
            >
              <option key="selecione" value="Selecione">
                Selecione
              </option>

              {categories.map(cat => (
                <option key={cat.category_name} value={cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </Filter>
          <AllPosts>
            {filteredList.map(element => (
              <Post key={element.id} post={element} />
            ))}
          </AllPosts>
        </Content>
      </Container>
    </>
  );
};

export default Animals;
