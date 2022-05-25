import * as React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
                <div>
                    <h1>CONCERT CLUB</h1>
                    <nav>
                        <Link to="/">
                            <button
                                className='link'>
                                Версия для слабовидящих
                            </button>
                        </Link>
                        <Link to="/UserPage">
                            <button
                                className='link'>
                                Мой профиль
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;