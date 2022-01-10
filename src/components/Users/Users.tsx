import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: 'https://photopict.ru/wp-content/uploads/2019/05/Krasivye_kartinki_na_avu_v_kontakte2.jpg',
          followed: false,
          fullName: 'Katrin',
          status: 'I am learning React',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          photoUrl: 'https://vjoy.cc/wp-content/uploads/2019/06/2-30.jpg',
          followed: true,
          fullName: 'Andrew',
          status: 'I am the best',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://avatarko.ru/img/kartinka/5/zhivotnye_panda_4743.jpg',
          followed: true,
          fullName: 'Maks',
          status: 'I am playing',
          location: {city: 'Gomel', country: 'Belarus'}
        },
        {
          id: 4,
          photoUrl: 'https://vjoy.cc/wp-content/uploads/2019/06/10-28.jpg',
          followed: false,
          fullName: 'Ivan',
          status: 'hi',
          location: {city: 'Kiev', country: 'Ukraine'}
        },
      ]
    );
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <div>
              <div className={styles.userAvatar}>
                <img src={u.photoUrl} alt=""/>
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Users;