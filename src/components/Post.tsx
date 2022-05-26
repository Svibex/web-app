import {IPost} from "../types/types";

interface PostProps {
    post: IPost;
}

const Post: React.FC<PostProps> = ({post}) => {

    return (
        <div className={'post'}>
            <div className={'postTitle'}>
                <h3>{post.title}</h3>
                <h3>{post.userId}</h3>
            </div>
            <div className={'postText'}>{post.body}</div>
        </div>
    );
};

export default Post;