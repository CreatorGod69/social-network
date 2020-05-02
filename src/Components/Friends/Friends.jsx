import React from 'react';
import u from "./Friends.module.css";
import userPhoto from "./../../Assets/Images/user-man.png";


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
        {/*<Preloader/>*/}
        {
            props.usersData.map(usersData => <div key={usersData.id}>
                <div className={u.info}>
                    <div className={u.inner}>
                        <div className={u.review}>
                            <img src={usersData.photos.small != null ? usersData.photos.small : userPhoto}
                                 alt=""></img>
                            <div className={u.text}>
                                <h1>{usersData.name}</h1>
                                <p>{usersData.status != null ? usersData.status : "Hello! I am a new user of this social network."}</p>
                            </div>
                            {usersData.followed
                                ? <button onClick={() => {
                                    props.unFollow(usersData.id)
                                }} className={u.btn}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    props.follow(usersData.id)
                                }} className={u.btn}>FOLLOW</button>}
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}
export default Friends;