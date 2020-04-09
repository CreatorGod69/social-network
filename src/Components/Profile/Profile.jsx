import React from 'react';
import profile from './Profile.module.css';
import Input from "./ProfileInput/Input";
import Post from './Post/Post'

const Profile = (props) => {
  let PostsElements = props.state.PostsData
    .map ( post => <Post name = {post.name} message={ post.message }/> );

    return <div className={profile.info}>
        <div className={profile.info__inner}>

          <img src="https://yt3.ggpht.com/a/AGF-l78VkDGB-FP-TBRgPfcaE42CblHIW5DD21A0-g=s800-c-k-c0xffffffff-no-rj-mo" alt=""/>

          <div className={profile.data}>
            <h1>John Doe</h1>
            <p>Date of Birth: 21 january</p>
            <p>City: Moscow</p>
            <p>Phone: +7(901)112-37-46</p>
            <p>Web Site: https://beactive.ru</p>
          </div>
        </div>
        <Input/>
        { PostsElements }
    </div>

}

export default Profile;