import {PostsType, PostTypeProps} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes =
  ReturnType<typeof addPostCreator>
  | ReturnType<typeof updateNewPOstTextCreator>

let initialState = {
  posts: [
    {id: 1, message: "It's my first post", likesCount: 12},
    {id: 2, message: "Hi! I'm learning React", likesCount: 152},
  ],
  newPostText: 'Write your message'
}

const profileReducer = (state: PostsType = initialState, action: ProfileActionsTypes) => {
  // state is _state.profilePage here

  switch (action.type) {

    case ADD_POST:
      let newPost: PostTypeProps = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}
// actionCreators
export const addPostCreator = () => ({type: ADD_POST} as const)
export const updateNewPOstTextCreator = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export default profileReducer;

