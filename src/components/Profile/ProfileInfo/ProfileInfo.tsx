import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatarDefault from '../../../assets/images/user-default.png'
import {ProfilePropsType} from "../Profile";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: ProfilePropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.author}>
        <div className={s.author_avatar}>
          {/*<img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>*/}
          <img src={props.profile && props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault}
               alt=""/>
        </div>
        <div className="author__text">
          <h2>{props.profile.fullName}</h2>
          <ProfileStatus status={props.profile.aboutMe}/>
          <div>{props.profile.lookingForAJobDescription}</div>

        </div>
      </div>
    </div>
  )
}
export default ProfileInfo;