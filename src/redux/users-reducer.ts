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
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type UsersActionsTypes =
  ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>

let initialState: InitialStatePostsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state;
  }
}
// actionCreators
export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserTypeProps>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


export default usersReducer;

