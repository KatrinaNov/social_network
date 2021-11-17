import React from 'react';
import s from './Post.module.css';

export type PostTypeProps = {
  message: string,
  likesCount: number
}
const Post = (props: PostTypeProps) => {
  return (
    <div className={s.post}>
      <img src="https://download-cs.net/steam/avatars/3396.jpg" alt=""/>
      {props.message}
      <div>
        <span>{props.likesCount}</span>
      </div>

    </div>
  );
}
export default Post;