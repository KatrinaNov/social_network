import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
  PostTypeProps,
} from "../../../redux/store";

export type MyPostsType = {
  posts: Array<PostTypeProps>
  addPost: () => void
  updateNewPostText: (newText: string) => void
  newPostText: string
}

const MyPosts = (props: MyPostsType) => {

  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
  // let newPostElement = React.createRef<HTMLTextAreaElement>();
  const newPostElement = useRef<HTMLTextAreaElement>(null);

  const onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostCreator())
  }
  const onPostChange = () => {
    let text = newPostElement.current?.value;
    text ? props.updateNewPostText(text) : props.updateNewPostText('')
  }

  return (
    <div className='content'>
      <h3>My posts</h3>
      <textarea
        className={s.textarea}
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={onAddPost}>Add post</button>
      <div className='posts'>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;