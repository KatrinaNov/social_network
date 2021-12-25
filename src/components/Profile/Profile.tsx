import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/store";

export type ProfilePropsType = {
  state: PostsType
  // addPost: () => void
  // updateNewPostText: (postMessage: string) => void
  dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               dispatch={props.dispatch}
               // addPost={props.addPost}
               // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}
export default Profile;