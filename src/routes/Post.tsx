import React, {useEffect, useState} from 'react'
import {IPost} from "../types/types";

interface PostProps {
    post: IPost;
}

const Post: React.FC<PostProps> = ({post}) => {

    return (
        <ul>
            <li>{post.id}</li>
            <li>{post.userId}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
        </ul>
    );
};

export default Post;