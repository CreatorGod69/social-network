import {usersAPI} from "../Api/Api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 4,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, usersData: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,  action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW, userId
    }
};
export const unFollow = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};

export const setUsers = (users) => ({type: SET_USERS, users});

export const totalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingInProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

export const getUsersThunkCreator = (currentPage,pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(totalUsersCount(data.totalCount));
    });
}

export const followThunkCreator = (usersData) => (dispatch) => {
        dispatch(toggleFollowingInProgress(true, usersData));
        usersAPI.follow(usersData).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(usersData));
        }
            dispatch(toggleFollowingInProgress(false,usersData));
    });
}

export const unFollowThunkCreator = (usersData) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, usersData));
    usersAPI.follow(usersData).then(data => {
        if (data.resultCode === 1) {
            dispatch(unFollow(usersData));
        }
        dispatch(toggleFollowingInProgress(false,usersData));
    });
}


export default usersReducer;