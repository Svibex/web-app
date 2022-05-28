import React, {useEffect, useState} from "react";
import User from '../components/User';
import {IUser} from "../types/types";
import axios from "axios";
import List from "../components/List";
import {useNavigate} from 'react-router-dom';
import {fetchUsers} from "../services";

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
                <User
                    onClick={(user) => navigate('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}
        />
    )
}

export default UsersList;