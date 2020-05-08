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
        DialogsData: state.messages.DialogsData,
        MessagesData: state.messages.MessagesData,
        isAuth: state.auth.isAuth
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
