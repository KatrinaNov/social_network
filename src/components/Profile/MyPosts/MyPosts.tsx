import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts
    .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

  const onAddPost = (formData: FormDataType) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className='content'>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className='posts'>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;

type FormDataType = {
  newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={s.textarea}
        placeholder={'Write your message'}
        name={"newPostText"}
        component={"textarea"}
      />
      <button>Add post</button>
    </form>

  );
};
const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'addPost'})(AddNewPostForm)

