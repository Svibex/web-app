import * as React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
                <div className={'header'}>
                    <h1 className={'headerTitle'}>CONCERT CLUB</h1>
                    <nav className={'headerNav'}>
                        <Link to="/">
                            <button
                                className='headerButton buttonVersion'>
                                Версия для слабовидящих
                            </button>
                        </Link>
                        <Link to="/UserPage">
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