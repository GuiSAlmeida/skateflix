import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';

const RegisterVideo = () => (
  <Layout>
    <h1>Cadastro de vídeo</h1>

    <Link to="/cadastro/categorias">
      Cadastro categoria
    </Link>
  </Layout>
);

export default RegisterVideo;
