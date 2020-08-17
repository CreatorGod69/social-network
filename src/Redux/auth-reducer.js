import { authAPI } from '../api/Api'

let SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    password: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, login, password, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {userId, password, login,  isAuth}
    }
};

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {login, id, password} = response.data.data
            dispatch(setAuthUserData(id, login, password))
        }
    });
}

export const login = ( login, password, rememberMe) => (dispatch) => {
    authAPI.login( login, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
            let id = response.data.userId
            dispatch(setAuthUserData(id, login, password, true))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer