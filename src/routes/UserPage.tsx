import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import PostsList from "./PostsList";
import {fetchUser} from "../services";

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
            <div className='userPageTitle'>
                <h2>{(user?.username) ? user.username.toUpperCase() : ''}</h2>
                <button className='backButton cardButton' onClick={() => navigate('/users')}>Вернуться к списку пользователей</button>
            </div>
            <ul className={'userInf'}>
                <li>{user?.name}</li>
                <li>{user?.email}</li>
                <li>{user?.phone}</li>
                <li>{user?.website}</li>
                <li>
                    <p>{user?.company.name}</p>
                    <p>{user?.company.bs}</p>
                </li>
                <div className={'userInfBtns'}>
                    <button className={'userInfButton'}>Написать сообщение
                    </button>
                    <button className={'userInfButton'}>Предложить сходить на концерт
                    </button>
                </div>
            </ul>
            <div>
                <h2>Посты</h2>
                <PostsList />
            </div>
        </div>
    );
};

export default UserPage;