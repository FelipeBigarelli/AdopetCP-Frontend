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
  listPost(): void;
  userPosts: IPostDTO[];
  listLastPosts(): void;
  lastPosts: IPostDTO[];
  listCategories(): void;
  categories: ICategoriesDTO[];
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
  id: string;
  category_name: string;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider: React.FC = ({ children }) => {
  const [userPosts, setUserPosts] = useState<IPostDTO[]>([]);
  const [lastPosts, setLastPosts] = useState<IPostDTO[]>([]);
  const [categories, setCategories] = useState<ICategoriesDTO[]>([]);

  const listPost = useCallback(async () => {
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

  const listLastPosts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/last').then(response => {
      const postsFormatted = response.data.map(post => {
        const phoneNumberFormatted = maskPhone(post.phone_number);

        return {
          ...post,
          phone_number: phoneNumberFormatted,
        };
      });

      setLastPosts(postsFormatted);
    });
  }, []);

  const listCategories = useCallback(async () => {
    await api.get<ICategoriesDTO[]>('/categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    listCategories();
  }, [listCategories]);

  return (
    <PostContext.Provider
      value={{
        listPost,
        userPosts,
        listLastPosts,
        lastPosts,
        listCategories,
        categories,
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
