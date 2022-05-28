import React from "react";
import {IUser} from "../types/types";
import {useParams} from "react-router-dom";

interface CardProps {
    user: IUser;
}

type CardParams = {
    id: string;
}

const Card: React.FC<CardProps> = ({user}) => {

    const params = useParams<CardParams>()

    return (
            <div className={'card'}>
                <div className={'cardUserInf'}>
                    <h3 className={'cardUsername'}>{user.username}</h3>
                    <div className={'cardUser'}>{user.name}</div>
                </div>
                <button className={'cardButton'}>Смотреть профиль</button>
            </div>
    )
}

export default Card;