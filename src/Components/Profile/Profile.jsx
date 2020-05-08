import React from 'react';
import profile from './Profile.module.css';
import Input from "./ProfileInput/InputContainer";
import ProfileData from './ProfileData/ProfileData';
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return <div className={profile.info}>
        <div className={profile.info__inner}>
          <ProfileData profile={props.profile}/>
          <Input />
        </div>
    </div>

}

export default Profile;