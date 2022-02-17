import React, { Component } from 'react';
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    state = {}
    render() {
        return (
            <header className='header'>
                <FontAwesomeIcon icon={faPaw} color='var(--primary-color)' size="4x"/>
                <h1 className='header__title'>React PetShop</h1>
                <nav className='header__nav'>
                    <ul className='header__items'>
                        <li><a>Services</a></li>
                        <button className='button'>Schedule Service</button>    
                    </ul>
                </nav>
            </header>
            );
    }
}

export default Header;