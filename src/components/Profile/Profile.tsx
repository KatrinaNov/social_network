import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

export type ProfilePropsType = {
  store: Store
  // state: PostsType
  // addPost: () => void
  // updateNewPostText: (postMessage: string) => void
  // dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
export default Profile;