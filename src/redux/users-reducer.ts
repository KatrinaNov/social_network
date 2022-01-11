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
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UsersActionsTypes =
  ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>

let initialState: InitialStatePostsType = {
  users: [],
}

const usersReducer = (state: InitialStatePostsType = initialState, action: UsersActionsTypes): InitialStatePostsType => {
  // state is _state.profilePage here

  switch (action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(m=>m.id === action.userId ? {...m, followed: true} : m)}
    case UNFOLLOW:
      return {...state, users: state.users.map(m=>m.id === action.userId ? {...m, followed: false} : m)}
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}
// actionCreators
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserTypeProps>) => ({type: SET_USERS, users} as const)


export default usersReducer;

