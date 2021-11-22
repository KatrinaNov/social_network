import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsType} from "../../../redux/state";


const MyPosts = (props: MyPostsType) => {

  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

  let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef(); //создаем ссылку
  let addPost = () => {
    let text = newPostElement.current?.value;
    alert(text);
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