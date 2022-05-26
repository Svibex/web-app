import React from "react";
import {IUser} from "../types/types";

interface CardProps {
    user: IUser;
}


const Card: React.FC<CardProps> = ({user}) => {
    return (
            <div className={'card'}>
                <div className={'cardUserInf'}>
                    <h3>{user.username}</h3>
                    <div className={'cardUser'}>{user.name}</div>
                </div>
                <button className={'cardButton'}>Смотреть профиль</button>
            </div>
    )
}

export default Card;