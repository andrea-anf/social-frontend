import '../../styles/post/post.css'
import  React, { useState } from 'react'



function Post(params) {
    const [like, setLike] = useState(false)
    

    return (
        <div className="post-body">
            <div className="post-header">
                <img src={require("./user.jpg")} className="post-user-pic" alt="user"/>
                <h3 className='post-username'>User Name</h3>
            </div>
            <h2 className='post-title'>Note title</h2>
            <div className='post-content'>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className='post-buttons'>
                <div className='post-button'>
                    <label htmlFor='like-button'>0</label>
                    <button name="like-button">Like</button>
                </div>
                <div className='post-button'>
                    <label htmlFor='comment-button'>2341</label>
                    <button name="comment-button">Comment</button>
                </div>
                <div className='post-button'>
                    <button name="share-button">Share</button>
                </div>
            </div>
        </div>
    )    
}

export default Post