import Post from "./post-content"
import '../../styles/post/post-list.css'

function PostList(params) {
    return (
        <div className="post-list">
            <Post></Post>
            <Post></Post>
        </div>
    )    
}

export default PostList