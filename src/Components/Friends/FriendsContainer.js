import  { connect } from 'react-redux'
import Friends from './Friends'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
    followThunkCreator,
    unFollowThunkCreator

} from '../../redux/users-reducer'
import { compose } from 'redux'
import { getPageSize, getFollowingInProgress,getIsFetching, getCurrentPage, getTotalUsersCount, getUsers } from '../../redux/users-selectors'


class FriendsClassComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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

let mapStateToProps = (state) => ({
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
})

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage, toggleFollowingInProgress,
        getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
    }),
)(FriendsClassComponent)