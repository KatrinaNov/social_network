import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

const Profile = (props: any) => {
  return (
    <div className='content'>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
}
export default Profile;