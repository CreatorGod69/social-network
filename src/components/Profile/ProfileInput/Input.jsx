import React from "react";
import input from "./Input.module.css";
import Post from "../Post/Post";
import { reduxForm, Field, reset } from "redux-form";
import { required, maxLenghtCreator } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

let maxLenght50 = maxLenghtCreator(50);

const InputForm = (props) => {
  let PostsElements = props.post.map((post) => (
    <Post
      key={post.id}
      img={post.img}
      name={post.name}
      message={post.message}
      data={post.data}
    />
  ));

  return (
    <div className={input.post}>
      <form onSubmit={props.handleSubmit}>
        <Field
          validate={[required, maxLenght50]}
          component={Textarea}
          rows="3"
          placeholder="Write a message"
          name={"profile"}
        ></Field>
        <div>
          <button className={input.btn}>POST</button>
        </div>
      </form>
      <div>{PostsElements}</div>
    </div>
  );
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("profile-form"));
};

const InputReduxForm = reduxForm({
  form: "profile-form",
  onSubmitSuccess: afterSubmit,
})(InputForm);

const Input = (props) => {
  const onSubmit = (value) => {
    props.addPost(value.profile);
  };

  return (
    <InputReduxForm
      post={props.post}
      updateNewPostText={props.updateNewPostText}
      onSubmit={onSubmit}
    />
  );
};

export default Input;
