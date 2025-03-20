import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
    return (
        <Navbar className="header-bg text-white text-center py-3">
            <h1 className="w-100">TODO App</h1>
        </Navbar>
    );
};

export default Header;