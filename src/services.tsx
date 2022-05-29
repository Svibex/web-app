import axios from "axios";
import {IPost, IUser, IComment} from "./types/types";

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

export async function fetchUserPosts(id: string, number:string) {
    try {
        const response = await axios.get<IPost[]>
        ('https://jsonplaceholder.typicode.com/users/' + id + '/posts?_limit=' + number)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export async function fetchUserPost(id: string) {
    try {
        const response = await axios.get<IPost>
        ('https://jsonplaceholder.typicode.com/posts/' + id)
        return response.data
    } catch (e) {
        alert(e)
    }
}

export async function fetchComments(id: string) {
    try {
        const response = await axios.get<IComment[]>
        ('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        return response.data
    } catch (e) {
        alert(e)
    }
}

export async function postComment(id: string | undefined, comment: IComment) {
    const {name, email, body} = comment;

    try {
        const response = await axios.post<IComment>
            ('https://jsonplaceholder.typicode.com/posts/' + id + '/comments',
           {
                name,
                email,
                body,
           })
        return response.data

    } catch (e) {
        alert(e)
    }
}