import React from 'react';

import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserTypeProps} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  users: Array<UserTypeProps>
}
type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserTypeProps>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    users: state.usersPage.users,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserTypeProps>) => {
      dispatch(setUsersAC(users))
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;