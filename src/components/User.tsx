import {IUser} from "../types/types";
import React from "react";

interface UserProps {
    user: IUser;
}

const User: React.FC<UserProps> = ({user}) => {

    return (
        <div className={'user'}>
            <h2>{(user.username).toUpperCase()}</h2>
            <ul className={'userInf'}>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
                <li>
                    <p>{user.company.name}</p>
                    <p>{user.company.bs}</p>
                </li>
                <div className={'userInfBtns'}>
                    <button className={'userInfButton'}>Написать сообщение
                    </button>
                    <button className={'userInfButton'}>Предложить сходить на концерт
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default User;