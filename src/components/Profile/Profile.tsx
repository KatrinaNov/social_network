import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' alt=''/>
      </div>
      <div className="author">
        <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
        <div className="author__text">
          <h2>Name</h2>
        </div>
      </div>
      <MyPosts/>
    </div>
  );
}
export default Profile;