import {connect} from "react-redux";
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, totalUsersCountAC} from './../../Redux/users-reducer'
import Friends from "./Friends";

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        totalUsersCount: (totalUsersCount) => { dispatch(totalUsersCountAC(totalUsersCount)) },
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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;