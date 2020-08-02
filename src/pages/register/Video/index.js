import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/Formfield';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useform';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const RegisterVideo = () => {
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);

  const { handleValues, category } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((cats) => {
        setCategories(cats);
      });
  }, []);

  return (
    <Layout>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaId = categories.find((cat) => cat.titulo === category.categoria);

        videosRepository.create({
          titulo: category.titulo,
          url: category.url,
          categoriaId: categoriaId.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={category.titulo}
          onChange={handleValues}
        />

        <FormField
          label="url"
          name="url"
          value={category.url}
          onChange={handleValues}
        />

        <FormField
          label="categoria"
          name="categoria"
          value={category.categoria}
          onChange={handleValues}
          sugestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categorias">
        Cadastro categoria
      </Link>
    </Layout>
  );
};

export default RegisterVideo;
