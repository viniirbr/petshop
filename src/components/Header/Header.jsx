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
                        <div className='header__services'>
                            {this.props.servicesCount>0 ? // conditional for exhibit counter
                            <div className='header__count'>{this.props.servicesCount}</div>
                            :console.log('é 0')}
                            <Link to="./services" className='header__nav-item'><li>Services</li></Link>
                        </div>
                        <Link to="./" className='button'>Schedule Service</Link>
                    </ul>
                </nav>
            </header>

        );
    }
}

export default Header;