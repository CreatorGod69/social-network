let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
let initialState = {
    usersData: [],
    pageSize: 4,
    totalUsersCount:0,
    currentPage: 2
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
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
};
export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
};
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const totalUsersCountAC = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;