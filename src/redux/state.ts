import {rerenderEntireTree} from "../render";
import {FriendType} from "../components/Friends/Friend/Friend";

export type PostTypeProps = {
  id: number,
  message: string,
  likesCount: number
}
export type PostsType = {
  posts: Array<PostTypeProps>
  newPostText: string
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
  newMessage: string
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
    ],
    newPostText: 'Write your message'
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
    ],
    newMessage: 'Add your message'
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

export let addPost = () => {
  let newPost: PostTypeProps = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export let addMessage = () => {
  let newMessage: MessageType = {
    id: 5,
    message: state.dialogsPage.newMessage
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage: string) => {
  state.dialogsPage.newMessage = newMessage;
  rerenderEntireTree(state);
}

export default state;