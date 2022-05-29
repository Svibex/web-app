import * as React from "react";
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <h1 className='header__title'>CONCERT CLUB</h1>
            </Link>
            <nav className='header__nav'>
                <button
                    className='header__button-version'>
                    Версия для слабовидящих
                </button>
                <Link to="/users/1">
                    <button
                        className='header__button-profile'>
                        Мой профиль
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default Header;