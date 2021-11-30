import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.author}>
        <div className={s.author_avatar}>
          <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
        </div>
        <div className="author__text">
          <h2>Patrick Star</h2>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;