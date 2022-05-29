import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import List from "../../components/List/List";
import {fetchUsers} from "../../services";
import {IUser} from "../../types/types";

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