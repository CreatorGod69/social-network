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
            userId = 7731
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
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer)