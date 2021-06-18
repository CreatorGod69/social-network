import { addPostActionCreator } from "../../../redux/profile-reducer";
import Input from "./Input";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    post: state.profile.PostsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      if (text !== "") {
        dispatch(addPostActionCreator("Maria", text, "10/11/2020"));
      }
    },
  };
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
