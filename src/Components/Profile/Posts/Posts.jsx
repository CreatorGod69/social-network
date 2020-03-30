import React from 'react';
import post from './Posts.module.css';

const Posts = () => {
    return <div className={post.post}>
            <div className={post.input}>
                <form action="">
                    <div>
                        <textarea rows="3" placeholder="Write a message" required></textarea>
                    </div>
                    <button className={post.btn} href=""><span>POST</span></button>
                </form>
            </div>
            <div className={post.comments}>
                <div className={post.review}>
                    <div className={`${post.img} ${post.img1}`}></div>
                    <div className={post.text}>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <footer>
                            <div className="like"></div>
                            <time>22.02.2020</time>
                        </footer>
                    </div>
                </div>

                <div className={post.review}>
                    <div className={`${post.img} ${post.img2}`}></div>
                    <div className={post.text}>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta porro laboriosam libero ab repudiandae, nisi repellendus dolor placeat? Tempora similique provident iusto ducimus aut laboriosam error veniam incidunt expedita nostrum, et corporis aliquid eveniet aspernatur facere possimus beatae perspiciatis, vitae ut dolores. Id, eius.</p>
                        <footer>
                            <div className="like"></div>
                            <time>22.02.2020</time>
                        </footer>
                    </div>
                </div>

            </div>
        </div>
}

export default Posts;