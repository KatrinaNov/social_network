import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

export type ProfilePropsType = {
  state: PostsType
  addPost: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}
export default Profile;