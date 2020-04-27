import React from 'react';
import profile from './Profile.module.css';
import Input from "./ProfileInput/InputContainer";
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
    return <div className={profile.info}>
        <div className={profile.info__inner}>
          <ProfileData/>
          <Input />
        </div>
    </div>

}

export default Profile;