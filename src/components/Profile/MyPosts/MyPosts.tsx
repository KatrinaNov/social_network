import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: "It's my first post", likesCount: 12},
    {id: 2, message: "Hi! I'm learning React",  likesCount: 12},
  ]
  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  return (
    <div className='content'>
      <h3>My posts</h3>
      <textarea placeholder={'Write your message'} className={s.textarea}/>
      <button>Add post</button>
      <div className='posts'>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;