import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";

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
        ...action.payload,
      }
    default:
      return state;
  }
}
// actionCreators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
  {type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const
)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
}

export const login = (email: string, password: string, rememberMe :boolean) => (dispatch: Dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        //@ts-ignore
        dispatch(getAuthUserData())
      }
    })
}

export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}



export default authReducer;

