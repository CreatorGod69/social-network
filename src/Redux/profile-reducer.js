import {profileAPI, usersAPI} from "../Api/Api"
import userPhoto from "./../Assets/Images/user-man.png";

const ADD_POST = 'ADD-POST'
const SET_STATUS = 'SET_STATUS'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    PostsData: [
        {
            id: 1,
            img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg",
            name: "Vika",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor.",
            data: "10/04/2020"
        },
        {
            id: 2,
            img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg",
            name: "Alex",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?",
            data: "01/03/2020"
        },
    ],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7731,
                name: action.namePost,
                message: state.newPostText,
                data: action.dataPost,
                img: userPhoto,
            };
            return {
                ...state,
                newPostText: "",
                PostsData: [...state.PostsData, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = (namePost, dataPost) => {
    return {
        type: ADD_POST,
        namePost: namePost,
        dataPost: dataPost
    }
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
            
        }
    })
}


export default profileReducer;