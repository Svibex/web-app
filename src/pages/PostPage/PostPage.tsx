import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Post from '../../components/Post/Post'
import {fetchComments, fetchUserPost} from "../../services";
import List from "../../components/List/List";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import {postComment} from '../../services'
import {IComment, IPost} from "../../types/types";
import './PostPage.css'

type PostPageParams = {
    id: string;
}

const PostPage: React.FC = () => {

    const [comments, setComments] = useState<IComment[]>([])
    const [post, setPost] = useState<IPost | null>(null)
    const params = useParams<PostPageParams>()
    const [isFormVisible, setIsFormVisible] = useState(false)

    useEffect(() => {
        fetchComments(params.id || '').then(r => {
            setComments(r || []);
        })
    }, [])

    useEffect(() => {
        fetchUserPost(params.id || '').then((r =>
            setPost(r || null)))
    }, [])

    function addComment(comment: IComment) {
            postComment(params.id, comment).then((r => console.log(r)))
            setComments(() => [...comments, comment])
            setIsFormVisible(false)
    }

    return (
        <div className='postPage'>
            <div className='postPage__post-wrapper'>
                <div className='postPage__post'>
                    <h2>Пост</h2>
                    <Post post={post} isPreview={false}/>
                </div>
            </div>
            <div className='postPage__comments-wrapper'>
                <div className='postPage__comments'>
                    <h2>Комментарии к посту</h2>
                    <List items={comments}
                          renderItem={(comment: IComment) =>
                              <Comment comment={comment} key={comment.id}/>}
                    />
                </div>
            </div>
            <button className='postPage__button'
                    onClick={() => setIsFormVisible(!isFormVisible)}>
                {!isFormVisible? 'Добавить комментарий': 'Отменить'}
            </button>
            {isFormVisible ? <Form addComment={addComment}/> : null}
        </div>
    )
}

export default PostPage;