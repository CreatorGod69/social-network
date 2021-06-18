import { authAPI } from '../api/Api'
import { stopSubmit } from 'redux-form'

let SET_USER_DATA = 'social-network/auth/SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    password: null,
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

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (!response.data.resultCode) {
        let {login, id, password} = response.data.data
        dispatch(setAuthUserData(id, login, password, true))
    }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe)

    if(!response.data.resultCode) {
        let id = response.data.data.userId
        dispatch(setAuthUserData(id, login, password, true))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'invalid login or password'
        dispatch(stopSubmit('login-form', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if(!response.data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer