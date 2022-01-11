import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user-default.png'

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => props.setUsers(response.data.items))
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <div>
              <div className={styles.userAvatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>Follow</button>
                }
              </div>
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Users;