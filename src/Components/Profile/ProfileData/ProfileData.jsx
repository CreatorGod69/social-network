import React from 'react';
import profile from './ProfileData.module.css';



const ProfileData = (props) => {
    return <div className={profile.profile}>
        <img src="https://yt3.ggpht.com/a/AGF-l78VkDGB-FP-TBRgPfcaE42CblHIW5DD21A0-g=s800-c-k-c0xffffffff-no-rj-mo" alt="" />

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
