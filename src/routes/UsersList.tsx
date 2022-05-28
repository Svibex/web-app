import React, {useEffect, useState} from "react";
import User from '../components/User';
import {IUser} from "../types/types";
import axios from "axios";
import List from "../components/List";

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=4')
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <User user={user} key={user.id}/>}
        />
    )
}

export default UsersList;