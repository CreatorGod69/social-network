import { authAPI } from '../api/Api'
import { stopSubmit } from 'redux-form'
import { getAuthUserData } from './auth-reducer'

let INITIALOZED_SUCCESS = 'INITIALOZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALOZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALOZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer