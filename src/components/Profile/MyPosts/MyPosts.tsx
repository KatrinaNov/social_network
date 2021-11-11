import React from 'react';
import s from './Post.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className='content'>
      <h3>My posts</h3>
      <input type="text" placeholder={'Write your message'}/>
      <button>Add post</button>
      <div className='posts'>
        <Post message={"It's my first post"} likesCount={25}/>
        <Post message={"Hi! I'm learning React"} likesCount={400}/>
      </div>
    </div>
  )
}
export default MyPosts;