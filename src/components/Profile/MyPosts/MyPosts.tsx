import React, {RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostTypeProps} from "../../../redux/state";

export type MyPostsType = {
  posts: Array<PostTypeProps>
  addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {

  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

  // let newPostElement = React.createRef<HTMLTextAreaElement>();
  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let addPost = () => {
    let text = newPostElement.current?.value;
    if (text) props.addPost(text)
    if (newPostElement.current) newPostElement.current.value = ''
  }

  return (
    <div className='content'>
      <h3>My posts</h3>
      <textarea ref={newPostElement} placeholder={'Write your message'} className={s.textarea}/>
      <button onClick={addPost}>Add post</button>
      <div className='posts'>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;