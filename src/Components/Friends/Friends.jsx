import React from 'react';
import u from "./Friends.module.css";


const Friends = (props) => {

    if(props.usersData.length === 0) {
        props.setUsers(
            [
                    {
                        id: 1,
                        img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg",
                        name: "Vika",
                        status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        followed: false
                    },
                    {
                        id: 2,
                        img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg",
                        name: "Alex",
                        status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?",
                        followed: true
                    }
                ],
        );
    }

    return <div>
        {
            props.usersData.map(usersData => <div key={usersData.id}>
            <div className={u.info}>
                <div className={u.inner}>
                    <div className={u.review}>
                        <img src={usersData.img} alt=""></img>
                        <div className={u.text}>
                        <h1>{usersData.name}</h1>
                        <p>{usersData.status}</p>
                    </div>
                    {usersData.followed
                        ? <button onClick={() => {
                            props.follow(usersData.id)
                        }} className={u.btn}>UNFOLLOW</button>
                        : <button onClick={() => {
                            props.unFollow(usersData.id)
                        }} className={u.btn}>FOLLOW</button>}
                </div>
            </div>
            </div>
            </div>)
        }
    </div>
}
export default Friends;