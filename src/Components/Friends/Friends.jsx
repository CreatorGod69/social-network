import React from 'react'
import u from './Friends.module.css'
import userPhoto from '../../assets/images/user-man.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'


const Friends = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
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