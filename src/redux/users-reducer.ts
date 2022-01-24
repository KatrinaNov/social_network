import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type LocationType = {
  city: string,
  country: string
}
type PhotosType = {
  small: string
  large: string
}
export type UserTypeProps = {
  id: number,
  name: string,
  photos: PhotosType,
  followed: boolean,
  status: string,
  location: LocationType

}
export type InitialStatePostsType = {
  users: Array<UserTypeProps>
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>,
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UsersActionsTypes =
  ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

let initialState: InitialStatePostsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state: InitialStatePostsType = initialState, action: UsersActionsTypes): InitialStatePostsType => {
  // state is _state.profilePage here

  switch (action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(m=>m.id === action.userId ? {...m, followed: true} : m)}
    case UNFOLLOW:
      return {...state, users: state.users.map(m=>m.id === action.userId ? {...m, followed: false} : m)}
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)}
    default:
      return state;
  }
}
// actionCreators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserTypeProps>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)


// thunk
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
}
export const setPageChange = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(pageNumber));
  usersAPI.getUsers(pageNumber, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
    })
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.unFollow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

  })
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.follow(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))

    })
}





export default usersReducer;

