import React from 'react'
import u from './Friends.module.css'
import userPhoto from '../../assets/images/user-man.png'
import { NavLink } from 'react-router-dom'


const Friends = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < /*pagesCount*/6; i++) {
        pages.push(i);
    }
    return <div>
        <div className={u.selector}>
            {pages.map(page => {
                return <span onClick={(e) => {
                    props.onPageChanged(page);
                }} className={props.currentPage === page && u.selectPage}>{page}</span>
            })}
        </div>
        {
            props.usersData.map(usersData => <div key={usersData.id}>
                <div className={u.info}>
                    <div className={u.inner}>
                        <div className={u.review}>
                            <NavLink to={'/profile/' + usersData.id}><img src={usersData.photos.small != null ? usersData.photos.small : userPhoto} alt=""></img></NavLink>
                            <div className={u.text}>
                                <h1>{usersData.name}</h1>
                                <p>{usersData.status != null ? usersData.status : "Hello! I am a new user of this social network."}</p>
                            </div>
                            {usersData.followed
                                ? <button disabled={props.followingInProgress.some(id => id === usersData.id)} onClick={() => {
                                    props.unFollow(usersData.id);
                                }} className={u.btnActive}>UNFOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === usersData.id)}  onClick={() => {
                                    props.follow(usersData.id);
                                }} className={u.btn}>FOLLOW</button>}

                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}
export default Friends;