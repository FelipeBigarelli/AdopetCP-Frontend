import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Select from 'react-select';

import { Container, Content, SelectCategory } from './styles';

import { usePost } from '../../hooks/post';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import IPostDTO from '../../components/Post/dtos/IPostDTO';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

const NewPost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { categories } = usePost();
  const history = useHistory();
  const [categoryValue, setCategoryValue] = useState('Selecione');

  const cats: any = [];
  categories.forEach(category => {
    cats.push(category.category_name);
  });

  const options = [
    { value: 'Cachorros', label: 'Cachorros' },
    { value: 'Gatos', label: 'Gatos' },
    { value: 'Roedores', label: 'Roedores' },
    { value: 'Aves', label: 'Aves' },
  ];

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
          category_name: Yup.string(),
        });

        console.log(data);

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/posts', data);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro na postagem',
            description: JSON.stringify(errors),
            // 'Ocorreu um erro ao fazer a postagem, verifique as informações',
          });
        }
      }
    },
    [history, addToast],
  );

  const handleChangeCategory = useCallback(e => {
    setCategoryValue(e);
  }, []);

  return (
    <Container>
      <Header />

      <h1>Nova postagem</h1>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} className="newpost-form">
          <Input name="title" placeholder="Título" />
          <Input name="description" placeholder="Descrição" />
          <Input name="phone_number" placeholder="Telefone" />
          <Input name="cep" placeholder="CEP" />
          <Input name="city" placeholder="Cidade" />
          <Input name="district" placeholder="Bairro" />
          <Input name="street" placeholder="Rua" />
          <Input name="house_number" placeholder="Número (opcional)" />

          <SelectCategory>
            <strong>Selecione uma categoria</strong>

            <Select value={categoryValue} options={cats} />
            {/* <select
              name="category_name"
              id="categories"
              onChange={e => {
                handleChangeCategory(e.target.value);
              }}
              value={caterogyValue}
            >
              <option id="Selecione" value="Selecione">
                Selecione
              </option>

              {categories.map(category => (
                <option
                  key={category.id}
                  id={category.id}
                  value={category.category_name}
                >
                  {category.category_name}
                </option>
              ))}
            </select> */}
          </SelectCategory>

          <Button type="submit">Próximo</Button>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
};

export default NewPost;
