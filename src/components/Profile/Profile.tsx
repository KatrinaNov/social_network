import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapStatePropsType} from "./ProfileContainer";

const Profile = (props: MapStatePropsType) => {
  return (
    <div className='content'>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
}
export default Profile;