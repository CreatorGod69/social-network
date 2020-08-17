import React from 'react'
import Profile from "./Profile"
import {getUsersProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('./users')
            }
        }

        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateUserStatus}/> )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer)