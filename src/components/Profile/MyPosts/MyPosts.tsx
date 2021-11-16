import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className='content'>
      <h3>My posts</h3>
      <textarea placeholder={'Write your message'} className={s.textarea}/>
      <button>Add post</button>
      <div className='posts'>
        <Post message={"It's my first post"} likesCount={25}/>
        <Post message={"Hi! I'm learning React"} likesCount={400}/>
      </div>
    </div>
  )
}
export default MyPosts;