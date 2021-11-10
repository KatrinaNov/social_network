import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.post}>
      <img src="https://download-cs.net/steam/avatars/3396.jpg" alt=""/>
      post1
      <div>
        <span>like</span>
      </div>

    </div>
  );
}
export default Post;