import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={post.post}>
      <div className={post.comments}>
        <div className={post.review}>
          <img src={props.img} alt=""></img>
          <div className={post.text}>
            <h1>{props.name}</h1>
            <p>{props.message}</p>
            <footer>
              <div className="like"></div>
              <time>{props.data}</time>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
