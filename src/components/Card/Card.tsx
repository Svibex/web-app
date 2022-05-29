import React, {useEffect} from "react";
import {IUser} from "../../types/types";
import {useNavigate} from "react-router-dom";
import {fetchUser} from "../../services";
import "./Card.css"

interface CardProps {
    user: IUser;
}

const Card: React.FC<CardProps> = ({user}) => {

    const navigate = useNavigate()
    const {username, name, id} = user

    useEffect(() => {
        fetchUser(id || '')
    }, [])

    return (
            <div className='card'>
                <div className='card__user'>
                    <h3 className='card__user-username'>{username}</h3>
                    <div className='card__user-name'>{name}</div>
                </div>
                <button className='card__button'
                        onClick={() => navigate('/users/' + id)}>
                    Смотреть профиль</button>
            </div>
    )
}

export default Card;