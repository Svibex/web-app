import React, {useEffect, useState} from "react";
import Post from './Post';
import {IPost} from "../types/types";
import axios from "axios";
import List from "../components/List";

const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        try {
            const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
            setPosts(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <List
            items={posts}
            renderItem={(post: IPost) => <Post post={post} key={post.id}/>}
        />
    )
}

export default PostsList;