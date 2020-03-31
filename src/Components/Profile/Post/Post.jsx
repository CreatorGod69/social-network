import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return <div className={post.post}>
            <div className={post.comments}>
                <div className={post.review}>
                    <div className={post.img}></div>
                    <div className={post.text}>
                        <h1>John Doe</h1>
                        <p>{props.message}</p>
                        <footer>
                            <div className="like"></div>
                            <time>22.02.2020</time>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
}

export default Post;