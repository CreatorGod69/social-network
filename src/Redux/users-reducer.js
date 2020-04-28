let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS'

let initialState = {
    usersData: [
        {
            id: 1,
            img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg",
            name: "Vika",
            status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            followed: false
        },
        {
            id: 2,
            img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg",
            name: "Alex",
            status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?",
            followed: true
        },
        {
            id: 3,
            img: "data:image/jpeg;base64,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",
            name: "Max",
            status: "Lorem ipsum dolor sit amet?",
            followed: true
        }
    ],
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
            return {...state, usersData: [...state.usersData, ...action.users]}
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

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;