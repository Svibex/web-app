import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import {useParams, useNavigate} from 'react-router-dom';
import PostsList from "../PostsList/PostsList";
import {fetchUser} from "../../services";
import './UserPage.css'

type UserPageParams = {
    id: string;
}

const UserPage: React.FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserPageParams>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser(params.id || '').then((r => setUser(r || null)))
    }, [])

    return (
        <div>
            <div className='userPage__border'>
                <div className='userPage'>
                    <div className='userPage__information-wrapper'>
                        <h2>{(user?.username) ? user.username.toUpperCase() : ''}</h2>
                        <button className='userPage__backButton'
                                onClick={() => navigate('/users')}>
                            Вернуться к списку пользователей</button>
                    </div>
                    <div className='userPage__information-ul-wrapper'>
                        <ul className='userPage__information'>
                            <li>{user?.name}</li>
                            <li>{user?.email}</li>
                            <li>{user?.phone}</li>
                            <li>{user?.website}</li>
                            <li>
                                <p>{user?.company.name}</p>
                                <p>{user?.company.bs}</p>
                            </li>
                            <div className='userPage__information-buttons'>
                                <button className='userPage__information-button'>
                                    Написать сообщение
                                </button>
                                <button className='userPage__information-button'>
                                    Предложить сходить на концерт
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className='userPage__post-wrapper'>
                    <div className='userPage__post'>
                        <h2>Посты</h2>
                        <button className='userPage__post-button'
                            onClick={() =>
                                navigate('/users/' + params.id + '/posts')}>
                                Посмотреть все
                        </button>
                    </div>
                <PostsList number='3' />
                </div>
            </div>
        </div>
    );
};

export default UserPage;