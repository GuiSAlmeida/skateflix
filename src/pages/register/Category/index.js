import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const RegisterCategory = () => {
    return (
        <Layout>
            <h1>Cadastro de categoria</h1>

            <Link to="/">
                Home
            </Link>
        </Layout>
    )
};

export default RegisterCategory;