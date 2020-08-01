import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

const RegisterCategory = () => {
    return (
        <Layout>
            <h1>Cadastro de categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input type="text" />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Home
            </Link>
        </Layout>
    )
};

export default RegisterCategory;