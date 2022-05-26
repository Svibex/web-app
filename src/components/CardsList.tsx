import React, {useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import List from "../components/List";
import Card from "../components/Card";

const CardsList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
            <List
                items={users}
                renderItem={(user: IUser) => <Card user={user} key={user.id}/>}
            />
    )
}

export default CardsList;