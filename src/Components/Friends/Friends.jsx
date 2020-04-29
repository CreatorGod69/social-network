import React from 'react';
import u from "./Friends.module.css";
import * as axios from "axios";
import userPhoto from "./../../Assets/Images/user-man.png";

class Friends extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.usersData.map(usersData => <div key={usersData.id}>
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
                                        this.props.unFollow(usersData.id)
                                    }} className={u.btn}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        this.props.follow(usersData.id)
                                    }} className={u.btn}>FOLLOW</button>}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}
export default Friends;