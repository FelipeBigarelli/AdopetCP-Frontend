import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import maskPhone from '../utils/maskPhone';

interface PostContextData {
  listUserPosts(): void;
  userPosts: IPostDTO[];
  listAllPosts(): void;
  allPosts: IPostDTO[];
  listLastPosts(): void;
  lastPosts: IPostDTO[];
  listCategories(): void;
  categories: ICategoriesDTO[];
  findByLastCreated(): void;
  lastCreated: IPostDTO | undefined;
}

interface IImagesDTO {
  id?: string;
  image_name?: string;
  post_id: string;
  user_id: string;
}

interface IPostDTO {
  id?: string;
  title?: string;
  description?: string;
  phone_number?: string;
  cep?: string;
  city?: string;
  district?: string;
  street?: string;
  house_number?: string;
  category_name?: string;
  images: IImagesDTO;
}

interface ICategoriesDTO {
  id?: string;
  category_name: string;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider: React.FC = ({ children }) => {
  const [userPosts, setUserPosts] = useState<IPostDTO[]>([]);
  const [allPosts, setAllPosts] = useState<IPostDTO[]>([]);
  const [lastPosts, setLastPosts] = useState<IPostDTO[]>([]);
  const [categories, setCategories] = useState<ICategoriesDTO[]>([]);
  const [lastCreated, setLastCreated] = useState<IPostDTO>();

  const listUserPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/user-posts').then(response => {
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

  const listAllPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts').then(response => {
      const postsFormatted = response.data.map(post => {
        const phoneNumberFormatted = maskPhone(post.phone_number);

        return {
          ...post,
          phone_number: phoneNumberFormatted,
        };
      });

      setAllPosts(postsFormatted);
    });
  }, []);

  const listLastPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/last').then(response => {
      setLastPosts(response.data);
    });
  }, []);

  const listCategories = useCallback(async () => {
    await api.get<ICategoriesDTO[]>('/categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  const findByLastCreated = useCallback(async () => {
    const lastPostCreated = await api
      .get('/posts/last-created')
      .then(response => {
        setLastCreated(response.data);
      });

    return lastPostCreated;
  }, []);

  useEffect(() => {
    listCategories();
    listAllPosts();
  }, [listCategories, listAllPosts]);

  return (
    <PostContext.Provider
      value={{
        listUserPosts,
        userPosts,
        listAllPosts,
        allPosts,
        listLastPosts,
        lastPosts,
        listCategories,
        categories,
        findByLastCreated,
        lastCreated,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

function usePost(): PostContextData {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePost must be userd within a PostProvider');
  }

  return context;
}

export { PostProvider, usePost };
