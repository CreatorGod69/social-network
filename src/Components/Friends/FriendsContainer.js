import {connect} from "react-redux";
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, totalUsersCountAC} from './../../Redux/users-reducer'
import Friends from "./Friends";
import React from "react";
import * as axios from "axios";

class FriendsClassComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
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
        return <Friends totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        usersData={this.props.usersData}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        onPageChanged={this.onPageChanged}
        />
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        setTotalUsersCount: (totalUsersCount) => { dispatch(totalUsersCountAC(totalUsersCount)) },
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsClassComponent);

export default FriendsContainer;