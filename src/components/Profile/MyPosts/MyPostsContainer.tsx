import React from 'react';

import {
  addPostCreator,
  InitialStatePostsType,
  PostTypeProps,
  updateNewPOstTextCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  posts: Array<PostTypeProps>
  newPostText: string
}
type MapDispatchToPropsType = {
  addPost: () => void
  updateNewPostText: (text: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostCreator())
    },
    updateNewPostText: (text: string) => {
      text ?
        dispatch(updateNewPOstTextCreator(text)) :
        dispatch(updateNewPOstTextCreator(''))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;