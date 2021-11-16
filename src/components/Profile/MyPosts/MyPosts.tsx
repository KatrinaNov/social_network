import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, message: "It's my first post", likesCount: 12},
    {id: 2, message: "Hi! I'm learning React",  likesCount: 12},
  ]

  return (
    <div className='content'>
      <h3>My posts</h3>
      <textarea placeholder={'Write your message'} className={s.textarea}/>
      <button>Add post</button>
      <div className='posts'>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
    </div>
  )
}
export default MyPosts;