import {connect} from "react-redux";
import {followAC, unFollowAC, setUsersAC} from './../../Redux/users-reducer'
import Friends from "./Friends";

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;