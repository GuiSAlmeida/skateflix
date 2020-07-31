import React from 'react';
import Logo from '../../assets/images/logo.png';
import './menu.css';
import Button from '../Button';

const Menu = () => {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="Logo" />
            </a>

            <Button as="a" className="button-link" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;