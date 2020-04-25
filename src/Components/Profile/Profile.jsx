import React from 'react';
import profile from './Profile.module.css';
import Input from "./ProfileInput/InputContainer";
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
          <Input store = {props.store}/>

          { PostsElements }
        </div>
    </div>

}

export default Profile;