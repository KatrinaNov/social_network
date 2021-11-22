export type PostTypeProps = {
  id: number,
  message: string,
  likesCount: number
}
export type MyPostsType = {
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
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
}
export type StateType = {
    profilePage: MyPostsType
    dialogsPage: DialogPropsType
}

let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message: "It's my first post", likesCount: 12},
      {id: 2, message: "Hi! I'm learning React",  likesCount: 12},
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
      {id: 2, message: "What's up? Can you help me?"},
      {id: 3, message: 'Yup!'},
      {id: 4, message: "Cool!"},
      {id: 5, message: 'Andrew'},
    ]
  }
}
export default state;