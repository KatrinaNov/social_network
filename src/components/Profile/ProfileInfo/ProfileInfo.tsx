import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <Preloader/>
  }
  console.log(props.profile)
  return (
    <div>
      <div className={s.author}>
        <div className={s.author_avatar}>
          {/*<img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>*/}
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <div className="author__text">
          <h2>{props.profile.fullName}</h2>
          <p>{props.profile.aboutMe}</p>
          <div>{props.profile.lookingForAJobDescription}</div>

        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;