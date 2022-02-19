import React from 'react';

import {
  addPostCreator,
  PostTypeProps,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  posts: Array<PostTypeProps>
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostCreator(newPostText))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;