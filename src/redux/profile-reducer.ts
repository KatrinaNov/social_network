export type PostTypeProps = {
  id: number,
  message: string,
  likesCount: number
}
type PhotoProfileType = {
  small: string | null
  large: string | null
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type ProfilePropsType = {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotoProfileType
}
export type ProfileType = ProfilePropsType | null
export type InitialStatePostsType = {
  posts: Array<PostTypeProps>
  newPostText: string
  profile: ProfileType
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type ProfileActionsTypes =
  ReturnType<typeof addPostCreator>
  | ReturnType<typeof updateNewPOstTextCreator>
  | ReturnType<typeof setUserProfile>

let initialState: InitialStatePostsType = {
  posts: [
    {id: 1, message: "It's my first post", likesCount: 12},
    {id: 2, message: "Hi! I'm learning React", likesCount: 152},
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state: InitialStatePostsType = initialState, action: ProfileActionsTypes): InitialStatePostsType => {
  // state is _state.profilePage here

  switch (action.type) {

    case ADD_POST: {
      let newPost: PostTypeProps = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {...state, posts: [...state.posts, newPost], newPostText: ''};
    }

    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newText};

    case SET_USER_PROFILE:
      return {...state, profile: action.profile};

    default:
      return state;
  }
}
// actionCreators
export const addPostCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const updateNewPOstTextCreator = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export default profileReducer;

