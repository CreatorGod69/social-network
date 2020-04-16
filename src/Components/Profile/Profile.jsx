import React from 'react';
import profile from './Profile.module.css';
import Input from "./ProfileInput/Input";
import Post from './Post/Post'
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
  let PostsElements = props.state.PostsData.map (post => <Post
    img = {post.img}
    name = {post.name}
    message = {post.message} 
    data = {post.data}/> 
  );

    return <div className={profile.info}>
        <div className={profile.info__inner}>
          <ProfileData/>
          <Input 
          addPost={props.addPost} 
          ProfileData={props.state.ProfileData} 
          newPostText={props.state.newPostText}
          updateNewPostText={props.updateNewPostText}/>

          { PostsElements }
        </div>
    </div>

}

export default Profile;