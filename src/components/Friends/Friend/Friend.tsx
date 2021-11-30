import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

export type FriendType = {
  id: number
  name: string
}

const Friend = ({id, name, ...props}: FriendType) => {
  return (
        <li key={id} className={s.friend}>
          <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt=""/>
          {name}
        </li>
  );
}
export default Friend;