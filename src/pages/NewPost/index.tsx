import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import IPostDTO from '../../components/Post/dtos/IPostDTO';

import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

const NewPost: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IPostDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          photo: Yup.string().required('Imagem obrigatória'),
          title: Yup.string().required('Título obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          phone_number: Yup.string().required('Número de telefone obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
          city: Yup.string().required('Cidade obrigatória'),
          district: Yup.string().required('Bairro obrigatório'),
          street: Yup.string().required('Rua obrigatória'),
          house_number: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro na postagem',
            description:
              'Ocorreu um erro ao fazer a postagem, verifique as informações',
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na postagem',
          description:
            'Ocorreu um erro ao fazer a postagem, verifique as informações',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header />

      <h1>Nova postagem</h1>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="photos" id="photos" placeholder="Foto" type="file" />

          <Input name="title" placeholder="Título" />
          <Input name="description" placeholder="Descrição" />
          <Input name="phone_number" placeholder="Telefone" />
          <Input name="cep" placeholder="CEP" />
          <Input name="city" placeholder="Cidade" />
          <Input name="district" placeholder="Bairro" />
          <Input name="street" placeholder="Rua" />
          <Input name="house_number" placeholder="Número" />

          <Button type="submit">Postar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewPost;
