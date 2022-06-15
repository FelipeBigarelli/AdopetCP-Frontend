import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FaWhatsapp, FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiCamera, FiMail } from 'react-icons/fi';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import catImg from '../../assets/filhotes-dashboard.jpg';

import { IUserProfileDTO } from '../../dtos/IUserProfile';

import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import { usePost } from '../../hooks/post';
import { useToast } from '../../hooks/toast';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AvatarInput,
  PostsContainer,
  Post,
  PostContent,
  PostFooter,
} from './styles';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, updateUser } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  const { isShown, toggle } = useModal();
  const { listUserPosts, userPosts } = usePost();

  const handleSubmit = useCallback(
    async (data: IUserProfileDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/users/profile', data);

        updateUser(response.data);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro no perfil',
            description:
              // JSON.stringify(errors),
              'Ocorreu um erro ao tentar alterar o perfil, verifique as informações',
          });
        }
      }
    },
    [history, addToast, updateUser],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  useEffect(() => {
    listUserPosts();
  }, [listUserPosts]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Alterar perfil do usuário"
          >
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              className="editprofile-form"
              initialData={{
                name: user.name,
                email: user.email,
              }}
            >
              <Input name="name" icon={FaUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <AvatarInput>
                <label htmlFor="avatar">
                  <FiCamera />
                  <input
                    type="file"
                    id="avatar"
                    onChange={handleAvatarChange}
                  />
                </label>

                <img src={user.avatar_url} alt={user.name} />
              </AvatarInput>

              <Button type="submit">Alterar</Button>
            </Form>
          </Modal>
          <button type="button" onClick={toggle}>
            Editar perfil
          </button>

          <h1>Minhas postagens</h1>
          <PostsContainer>
            {userPosts.map(post => (
              <>
                <Post key={post.id}>
                  <img src={catImg} alt="Animal" />

                  <PostContent>
                    <div className="post-content">
                      <div className="description">
                        <strong>{post.title}</strong>
                        <p>{post.description}</p>
                      </div>

                      <PostFooter>
                        <img src={user.avatar_url} alt="Avatar" />

                        <div id="whatsapp">
                          <FaWhatsapp size={24} />
                          <p>{post.phone_number}</p>
                        </div>
                      </PostFooter>
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
