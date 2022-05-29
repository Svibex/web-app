import React, {useEffect, useState} from "react";
import UserCard from '../UserCard/UserCard';
import {IUser} from "../../types/types";
import List from "../List/List";
import {useNavigate} from 'react-router-dom';
import {fetchUsers} from "../../services";

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers('100').then(r => setUsers(r || []))
    }, [])

    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserCard
                    onClick={(user) => navigate('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}
        />
    )
}

export default UsersList;