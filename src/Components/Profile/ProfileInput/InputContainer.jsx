import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Input from "./Input";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        post: state.profile.PostsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: (text) => {
            if (text !== '') {
                dispatch(addPostActionCreator("Maria", "10/11/2020"));
            }
        }
    }
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;