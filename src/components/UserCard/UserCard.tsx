import React from "react";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../types/types";
import './UserCard.css'

interface UserCardProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserCard: React.FC<UserCardProps> = ({user, onClick}) => {

    const navigate = useNavigate()

    return (
        <div className='userCard__border'>
            <div className='userCard'>
                <div className='userCard__title'>
                    <h2>{(user.name).toUpperCase()}</h2>
                    <button className='userCard__button'
                        onClick={() => navigate('/users/' + user.id)}>
                        Смотреть профиль</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;