import React, {useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import List from "../components/List";

// interface UserPageProps {
//     user: IUser;
// }

const UserPage: React.FC = () => {
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
        <>
            <h1>HI</h1>
        <List
            items={users}
            renderItem={(user: IUser) => <UserPage key={user.id}/>}
        />
        </>
    )
}

export default UserPage;