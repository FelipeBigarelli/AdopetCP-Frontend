import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import IPostDTO from '../../components/Post/dtos/IPostDTO';

import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { usePost } from '../../hooks/post';

const NewPost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { categories } = usePost();
  const history = useHistory();
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    async (data: IPostDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          phone_number: Yup.string()
            .min(10, 'Número deve conter no mínimo 10 dígitos. Ex: 4387654321')
            .max(11, 'Número deve conter no máximo 11 dígitos. Ex: 43987654321')
            .required('Número de telefone obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
          city: Yup.string().required('Cidade obrigatória'),
          district: Yup.string().required('Bairro obrigatório'),
          street: Yup.string().required('Rua obrigatória'),
          house_number: Yup.string(),
          category_name: Yup.array().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/posts', data);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          alert('erro ');

          // addToast({
          //   type: 'error',
          //   title: 'Erro na postagem',
          //   description:
          //     'Ocorreu um erro ao fazer a postagem, verifique as informações',
          // });
        }

        // addToast({
        //   type: 'error',
        //   title: 'Erro na postagem',
        //   description:
        //     'Ocorreu um erro ao fazer a postagem, verifique as informações',
        // });
      }
    },
    [history],
  );

  return (
    <Container>
      <Header />

      <h1>Nova postagem</h1>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} className="newpost-form">
          {/* <Input name="photos" id="photos" placeholder="Foto" type="file" /> */}

          <Input name="title" placeholder="Título" />
          <Input name="description" placeholder="Descrição" />
          <Input name="phone_number" placeholder="Telefone" />
          <Input name="cep" placeholder="CEP" />
          <Input name="city" placeholder="Cidade" />
          <Input name="district" placeholder="Bairro" />
          <Input name="street" placeholder="Rua" />
          <Input name="house_number" placeholder="Número" />
          {/* <Input name="category_name" type="radio" /> */}
          <select name="category_name" id="categories" value="category_name">
            {categories.map(category => (
              <option
                key={category.id}
                value={category.category_name}
                onChange={e => setValue(e.toString())}
              >
                {category.category_name}
              </option>
            ))}
          </select>

          <Button type="submit">Postar</Button>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
};

export default NewPost;
