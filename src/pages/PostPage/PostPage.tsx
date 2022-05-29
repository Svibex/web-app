import React, {useEffect, useState} from "react";
import Post from '../../components/Post/Post'
import {IComment, IPost} from "../../types/types";
import {useParams} from "react-router-dom";
import {fetchComments, fetchUserPost} from "../../services";
import List from "../../components/List/List";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Form/Form";
import {postComment} from '../../services'
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
        <div>
            <h2>Пост</h2>
            <Post post={post} isPreview={false}/>
            <h2>Комментарии к посту</h2>
            <List items={comments}
                  renderItem={(comment: IComment) =>
                      <Comment comment={comment} key={comment.id}/>}
            />
            <button className='cardButton'
                    onClick={() => setIsFormVisible(true)}>
                Добавить комментарий
            </button>
            {isFormVisible ? <Form addComment={addComment}/> : null}
        </div>
    )
}

export default PostPage;