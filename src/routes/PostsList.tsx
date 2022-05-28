import React, {useEffect, useState} from "react";
import Post from '../components/Post';
import {IPost, IUser} from "../types/types";
import List from "../components/List";
import {useParams} from 'react-router-dom';
import {fetchUserPosts} from "../services";

type PostsListParams = {
    id: string;
}

const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const params = useParams<PostsListParams>()



    useEffect(() => {
        fetchUserPosts(params.id || '').then((r => setPosts(r || [])))
    }, [])

    return (
        <List
            items={posts}
            renderItem={(post: IPost) => <Post post={post} key={post.id}/>}
        />
    )
}

export default PostsList;