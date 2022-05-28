import * as React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
                <div className={'header'}>
                    <Link to="/">
                        <h1 className={'headerTitle'}>CONCERT CLUB</h1>
                    </Link>
                    <nav className={'headerNav'}>
                        <Link to="/">
                            <button
                                className='headerButton buttonVersion'>
                                Версия для слабовидящих
                            </button>
                        </Link>
                        <Link to="/users/1">
                            <button
                                className='headerButton buttonProfile'>
                                Мой профиль
                            </button>
                        </Link>
                    </nav>
                </div>
    )
}

export default Header;