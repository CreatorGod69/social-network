import React from 'react';

const Profile = () => {
    return <div className='content'>

      <div>
          <img class="wallpaper" src="https://c4.wallpaperflare.com/wallpaper/364/854/488/digital-art-photoshop-concept-art-futuristic-wallpaper-preview.jpg" />
      </div>

      <div className="content-inner">
        <div class="ava"></div>

        <div className="data">
          <h1 className="name">John Doe</h1>
          <p className="name">Date of Birth: 21 january</p>
          <p className="name">City: Moscow</p>
          <p className="name">Phone: +7(901)112-37-46</p>
          <p className="name">Web Site: https://beactive.ru</p>
        </div>

      </div>
    </div>
}

export default Profile;