import {addMessagesActionCreator, updateNewMessagesTextCreator} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: (text) => {
            if (text !== '') {
                dispatch(addMessagesActionCreator());
            }
        },
        updateNewMessagesText: (text) => {
            dispatch(updateNewMessagesTextCreator(text));
        }
    }
}

let mapStateToProps = (state) => {
    return {
        newMessages: state.messages.newMessageText,
        DialogsData: state.messages.DialogsData,
        MessagesData: state.messages.MessagesData
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
