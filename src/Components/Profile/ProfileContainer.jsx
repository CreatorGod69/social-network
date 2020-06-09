import React from 'react';
import Profile from "./Profile";
import {getUsersProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
// import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }

        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId);

    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} status={this.props.getUserStatus} updateStatus={this.props.updateUserStatus}/> )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile,
    status: state.status
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);