import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import Post from '../../components/Post/Post';
import List from "../../components/List/List";
import {fetchUserPosts} from "../../services";
import {IPost, IPostsListProps} from "../../types/types";
import './PostsList.css'

type PostsListParams = {
    id: string;
}

const PostsList: React.FC<IPostsListProps> = ({postsNumber}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const params = useParams<PostsListParams>()

    useEffect(() => {
        fetchUserPosts(params.id || '', postsNumber)
            .then((r => setPosts(r || [])))
    }, [])

    return (
        <div className='postsList__wrapper'>
            <div className='postsList'>
                <h2>Посты пользователя</h2>
                <List
                    items={posts}
                    renderItem={(post: IPost) => <Post post={post} key={post.id}/>}
                />
            </div>
        </div>
    )
}

export default PostsList;