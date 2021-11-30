import {rerenderEntireTree} from "../render";
import {FriendType} from "../components/Friends/Friend/Friend";

export type PostTypeProps = {
  id: number,
  message: string,
  likesCount: number
}
export type PostsType = {
  posts: Array<PostTypeProps>
}
export type DialogItemType = {
  name: string
  id: number
}
export type MessageType = {
  message: string
  id: number
}
export type DialogPropsType = {
  dialogs: Array <DialogItemType>
  messages: Array<MessageType>
}
export type SidebarType = {
  friends: Array<FriendType>
}
export type StateType = {
    profilePage: PostsType
    dialogsPage: DialogPropsType
    sidebar: SidebarType
}

let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message: "It's my first post", likesCount: 12},
      {id: 2, message: "Hi! I'm learning React",  likesCount: 152},
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Maksim'},
      {id: 3, name: 'Kate'},
      {id: 4, name: 'Vanya'},
      {id: 5, name: 'Andrew'},
    ],
    messages: [
      {id: 1, message: "Hello my friend!"},
      {id: 2, message: "What's up! Can you help me?"},
      {id: 3, message: 'Yup!'},
      {id: 4, message: "Cool!"},
      {id: 5, message: 'Can you tell me what problems you have and we will solve its together '},
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Maksim'},
      {id: 2, name: 'Vanya'},
      {id: 3, name: 'Alex'},
      {id: 4, name: 'Andrew'},
      {id: 5, name: 'Sergey'},
    ]
  }
}

export let addPost = (postMessage: string) => {
  let newPost: PostTypeProps = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);

}
export default state;