import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    totalUsersCount,
    toggleIsFetching
} from './../../Redux/users-reducer'
import Friends from "./Friends";
import React from "react";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";

class FriendsClassComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.totalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     usersData={this.props.usersData}
                     follow={this.props.follow}
                     unFollow={this.props.unFollow}
                     onPageChanged={this.onPageChanged}
                     isFetching={this.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

const FriendsContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    totalUsersCount,
    toggleIsFetching,
})(FriendsClassComponent);

export default FriendsContainer;