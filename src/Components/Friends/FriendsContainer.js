import {connect} from "react-redux";
import Friends from "./Friends";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
    followThunkCreator,
    unFollowThunkCreator

} from "../../Redux/users-reducer";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class FriendsClassComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     usersData={this.props.usersData}
                     onPageChanged={this.onPageChanged}
                     isFetching={this.isFetching}
                     followingInProgress={this.props.followingInProgress}
                     toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                     follow={this.props.followThunkCreator}
                     unFollow={this.props.unFollowThunkCreator}
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

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, toggleFollowingInProgress,
        getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
    }),
    withAuthRedirect
)(FriendsClassComponent);