export type InitialStatePostsType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
}
const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type AuthActionsTypes =
  ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleIsFetching>

let initialState: InitialStatePostsType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state: InitialStatePostsType = initialState, action: AuthActionsTypes): InitialStatePostsType => {
  // state is _state.profilePage here

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}
// actionCreators
export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


export default authReducer;

