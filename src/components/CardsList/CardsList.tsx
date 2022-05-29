import React, {useEffect, useState} from "react";
import {IUser} from "../../types/types";
import List from "../List/List";
import Card from "../Card/Card";
import {fetchUsers} from '../../services'

interface CardsListProps {
    number: string;
}

const CardsList: React.FC<CardsListProps> = ({number}) => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers(number).then(r => setUsers(r || []))
    }, [])

    return (
            <List
                items={users}
                renderItem={(user: IUser) =>
                    <Card user={user} key={user.id}/>}
            />
    )
}

export default CardsList;