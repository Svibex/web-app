import {IPost} from "../../types/types";
import {useNavigate} from "react-router-dom";
import './Post.css'

interface PostProps {
    post?: IPost | null;
    isPreview?: boolean;
}

const Post: React.FC<PostProps> = ({post, isPreview= true}) => {

    const navigate = useNavigate()

    return (
        <div className={isPreview? 'post post__preview' : 'post'}
             onClick={() => navigate('/posts/' + post?.id + '/comments')}>
            <div className='post__title'>
                <h3>{post?.title}</h3>
            </div>
            <div className='post__text'>{post?.body}</div>
        </div>
    );
};

export default Post;