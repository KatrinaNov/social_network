import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user-default.png'
import {UserTypeProps} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  users: Array<UserTypeProps>
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  // toggleFollowingProgress: (isFetching: boolean, id: number) => void
  followingInProgress: Array<number>
}

const Users = (props: PropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div>
    <div>
      {pages.map(p => {
        return <span
          key={p}
          className={props.currentPage === p ? styles.selectedPage : ''}
          onClick={() => props.onPageChanged(p)}
        >{p} </span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
          <div>
            <div className={styles.userAvatar}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.unfollow(u.id)}>
                  Unfollow
                </button>
                : <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.follow(u.id)}
                >
                  Follow
                </button>
              }
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      )
    }
  </div>
}

export default Users;