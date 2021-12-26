import React from 'react';

import {addPostCreator, updateNewPOstTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";

export type MyPostsType = {
  store: Store
}

const MyPostsContainer = (props: MyPostsType) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator())
  }
  const onPostChange = (text: string) => {
    text ?
      props.store.dispatch(updateNewPOstTextCreator(text)) :
      props.store.dispatch(updateNewPOstTextCreator(''))
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}/>
  )
}
export default MyPostsContainer;