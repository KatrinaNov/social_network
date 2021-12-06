import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

export type ProfilePropsType = {
  state: PostsType
  addPost: () => void
  updateNewPostText: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}
export default Profile;