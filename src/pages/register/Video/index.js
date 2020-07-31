import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const RegisterVideo = () => {
    return (
        <Layout>
            <h1>Cadastro de vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastro categoria
            </Link>
        </Layout>
    )
};

export default RegisterVideo;