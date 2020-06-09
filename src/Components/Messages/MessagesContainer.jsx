import {addMessagesActionCreator, updateNewMessagesTextCreator} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

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
        newMessages: state.messages.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
