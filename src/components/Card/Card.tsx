import React from "react";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../types/types";
import "./Card.css"

interface CardProps {
    user: IUser;
}

const Card: React.FC<CardProps> = ({user}) => {

    const navigate = useNavigate();
    const {username, name, id} = user;

    return (
        <div className='card'>
            <div className='card__user'>
                <h3 className='card__user-username'>{username}</h3>
                <div className='card__user-name'>{name}</div>
            </div>
            <button className='card__button'
                    onClick={() => navigate('/users/' + id)}>
                Смотреть профиль
            </button>
        </div>
    );
};

export default Card;