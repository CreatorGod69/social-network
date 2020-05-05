import {connect} from "react-redux";
import {follow, unFollow, setUsers, setCurrentPage, totalUsersCount, toggleIsFetching, toggleFollowingInProgress} from '../../Redux/users-reducer'
import Friends from "./Friends";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../Api/Api";

class FriendsClassComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.totalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
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
                     followingInProgress={this.props.followingInProgress}
                     toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
        followingInProgress: state.users.followingInProgress,
    }
}

const FriendsContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    totalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
})(FriendsClassComponent);

export default FriendsContainer;