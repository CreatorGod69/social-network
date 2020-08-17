import {applyMiddleware, combineReducers, createStore} from 'redux'
import { reducer as formReducer } from 'redux-form'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer 
});

let store = createStore(reducers, applyMiddleware(thunk))

export default store