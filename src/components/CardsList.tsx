import React, {useEffect, useState} from "react";
import {IUser} from "../types/types";
import List from "../components/List";
import Card from "../components/Card";
import {fetchUsers} from '../services'

const CardsList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers('100').then(r => setUsers(r || []))
    }, [])

    return (
            <List
                items={users}
                renderItem={(user: IUser) => <Card user={user} key={user.id}/>}
            />
    )
}

export default CardsList;