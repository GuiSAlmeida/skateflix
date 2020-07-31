import React from 'react';
import Logo from '../../assets/images/logo.png';
import './menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo" />
            </Link>

            <Button as={Link} className="button-link" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;