const SEND_MESSAGE =  'SEND-MESSAGE';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.MessagesData.push({id: 4, message: body});
            return state;
        case UPDATE_NEW_MESSAGES_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}

export const addMessagesActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessagesText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGES_TEXT,
        body: text
    }
}

export default messagesReducer;