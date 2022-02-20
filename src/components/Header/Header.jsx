import React, { Component } from 'react';
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            
            <header className='header'>
                <FontAwesomeIcon icon={faPaw} color='var(--primary-color)' size="4x" />
                <h1 className='header__title'>React PetShop</h1>
                <nav className='header__nav'>
                    <ul className='header__items'>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/" className='button'>Schedule Service</Link>
                    </ul>
                </nav>
            </header>

        );
    }
}

export default Header;