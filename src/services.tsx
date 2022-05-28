import axios from "axios";
import {IPost, IUser} from "./types/types";

export async function fetchUsers(usersNumber: string) {
    try {
        const response = await axios.get<IUser[]>
                ('https://jsonplaceholder.typicode.com/users?_limit=' + usersNumber)
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

export async function fetchUser(id: string) {
    try {
        const response = await axios.get<IUser>
        ('https://jsonplaceholder.typicode.com/users/' + id)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export async function fetchUserPosts(id: string) {
    try {
        const response = await axios.get<IPost[]>
        ('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        return response.data
    } catch (e) {
        alert(e)
    }
}