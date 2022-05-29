import React, {useEffect, useState} from "react";
import Post from '../../components/Post/Post';
import {IPost, IUser} from "../../types/types";
import List from "../../components/List/List";
import {useParams} from 'react-router-dom';
import {fetchUserPosts} from "../../services";

type PostsListParams = {
    id: string;
}

interface PostsListProps {
    number: string;
}

const PostsList: React.FC<PostsListProps> = ({number}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const params = useParams<PostsListParams>()

    useEffect(() => {
        fetchUserPosts(params.id || '', number).then((r =>
            setPosts(r || [])))
    }, [])

    return (
        <List
            items={posts}
            renderItem={(post: IPost) => <Post post={post} key={post.id}/>}
        />
    )
}

export default PostsList;