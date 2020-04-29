import React from 'react';
import u from "./Friends.module.css";
import * as axios from "axios";
import userPhoto from "./../../Assets/Images/user-man.png";

class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.totalUsersCount(response.data.totalUsersCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }
debugger
        return <div>
            <div className={u.selector}>
                {pages.map(page => {
                    return <span onClick={ () => {this.onPageChanged(page)}} className={this.props.currentPage === page && u.selectPage}>{page}</span>
                })}
            </div>
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