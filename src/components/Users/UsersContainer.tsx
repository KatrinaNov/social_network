import React from 'react';
import {connect} from "react-redux";
import {
  follow, getUsers,
  setCurrentPage, setPageChange,
  toggleFollowingProgress, unfollow,
  UserTypeProps
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
  users: Array<UserTypeProps>
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (currentPage: number) => void
  toggleFollowingProgress: (isFetching: boolean, id: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  setPageChange: (pageNumber: number, pageSize: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setPageChange(pageNumber, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, setPageChange}
)(UsersContainer);