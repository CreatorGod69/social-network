const SEND_MESSAGE =  'SEND-MESSAGE';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT'

let initialState = {
    MessagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: '???'},
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Quidem dolorem totam architecto eveniet unde mollitia, qui accusantium culpa?"
        },
    ],
    newMessageText: "",
    DialogsData: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Katy'},
        {id: 3, name: 'Gector'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Andre'},
        {id: 6, name: 'Rick'},
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                MessagesData: [...state.MessagesData, {id: 5, message: body}],
            }
        case UPDATE_NEW_MESSAGES_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };
        default:
            return state;
    }
}

export const addMessagesActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessagesTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGES_TEXT,
        body: text
    }
}

export default messagesReducer;