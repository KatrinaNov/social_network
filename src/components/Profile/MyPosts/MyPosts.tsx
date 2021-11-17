import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";

type MyPostsType = {
  posts: Array<PostTypeProps>
}
const MyPosts = (props: MyPostsType) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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