import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/Formfield';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useform';

const RegisterCategory = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const { handleValues, category, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, category]);
    clearForm(initialValues);
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://skateflix.herokuapp.com/categorias';
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCategories(
        [
          ...data,
        ],
      ));
  }, []);

  return (
    <Layout>
      <h1>
        Cadastro de categoria:
        {category.titulo}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value={category.name}
          name="name"
          onChange={handleValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={category.description}
          name="description"
          onChange={handleValues}
        />

        <FormField
          label="Cor"
          type="color"
          value={category.color}
          name="color"
          onChange={handleValues}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </Layout>
  );
};

export default RegisterCategory;
