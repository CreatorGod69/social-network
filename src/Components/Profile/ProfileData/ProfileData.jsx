import React from 'react';
import profile from './ProfileData.module.css';
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../Assets/Images/user-man.png";

const ProfileData = (props) => {
    if(!props.profile.profile) {
        return <Preloader />
    }
    debugger
        return <div className={profile.profile}>
            <img src={props.profile.profile.photos.small != null ? props.profile.profile.photos.small : userPhoto} alt=""/>
            <div className={profile.data}>
                <h1>John Doe</h1>
                <p>Date of Birth: 21 january</p>
                <p>City: Moscow</p>
                <p>Phone: +7(901)112-37-46</p>
                <p>Web Site: https://beactive.ru</p>
            </div>
        </div>
}

export default ProfileData;
