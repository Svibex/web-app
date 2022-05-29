import React from "react";
import {IComment} from "../../types/types";
import "./Comment.css";

interface CommentProps {
    comment: IComment;
}

const Comment: React.FC<CommentProps> = ({comment}) => {

    const {name, email, body} = comment

    return (
        <div className='comment'>
            <div className='comment__title'>
                <h3>{name}</h3>
                <h3>{email}</h3>
            </div>
            <div className='comment__text'>{body}</div>
        </div>
    )
}

export default Comment;