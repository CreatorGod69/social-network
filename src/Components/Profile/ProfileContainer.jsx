import React from 'react';
import Profile from "./Profile";
import {getUsersProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }

        this.props.getUsersProfile(userId)

    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile}/> )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);