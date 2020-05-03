import React from 'react';
import u from "./Friends.module.css";
import userPhoto from "./../../Assets/Images/user-man.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Friends = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < 5; /*pagesCount*/ i++) {
        pages.push(i);
    }
    return <div>
        <div className={u.selector}>
            {pages.map(page => {
                return <span onClick={() => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page && u.selectPage}>{page}</span>
            })}
        </div>
        {
            props.usersData.map(usersData => <div key={usersData.id}>
                <div className={u.info}>
                    <div className={u.inner}>
                        <div className={u.review}>
                            <NavLink to={'/profile/' + usersData.id}><img src={usersData.photos.small != null ? usersData.photos.small : userPhoto}
                                          alt=""></img></NavLink>
                            <div className={u.text}>
                                <h1>{usersData.name}</h1>
                                <p>{usersData.status != null ? usersData.status : "Hello! I am a new user of this social network."}</p>
                            </div>
                            {usersData.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersData.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fb511622-d9ec-4848-9fe7-594e9afa08a0"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 1) {
                                                props.unFollow(usersData.id)
                                            }
                                        });
                                }} className={u.btnActive}>UNFOLLOW</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersData.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fb511622-d9ec-4848-9fe7-594e9afa08a0"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(usersData.id)
                                            }
                                        });
                                }} className={u.btn}>FOLLOW</button>}

                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}
export default Friends;