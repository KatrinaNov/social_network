import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostTypeProps} from "./MyPosts/Post/Post";

export type ProfilePropsType = {
  posts: Array<PostTypeProps>
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  );
}
export default Profile;