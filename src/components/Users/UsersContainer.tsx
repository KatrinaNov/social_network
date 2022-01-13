import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
  UserTypeProps
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
  users: Array<UserTypeProps>
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
}
type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserTypeProps>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
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
  }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: Array<UserTypeProps>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, }
  )(UsersContainer);