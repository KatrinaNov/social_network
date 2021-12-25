import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer, {SideBarActionsTypes} from "./sidebar-reducer";

export type FriendType = {
  id: number
  name: string
}
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
  dialogs: Array<DialogItemType>
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
export type ActionsTypes =
  ProfileActionsTypes
  | DialogsActionsTypes
  | SideBarActionsTypes

export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscribe: (observer: (state: StateType) => void) => void
  dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "It's my first post", likesCount: 12},
        {id: 2, message: "Hi! I'm learning React", likesCount: 152},
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
      newMessage: ''
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
  },
  _callSubscriber(state: StateType) {
    console.log('State has changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer: (state: StateType) => void) {
    this._callSubscriber = observer; // наблюдатель, pattern
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}
export default store;



  // addPost() {
  //   let newPost: PostTypeProps = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText: string) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage: MessageType = {
  //     id: 5,
  //     message: this._state.dialogsPage.newMessage
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessage = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessage: string) {
  //   this._state.dialogsPage.newMessage = newMessage;
  //   this._callSubscriber(this._state);
  // },

// let state: StateType = {
//   profilePage: {
//     posts: [
//       {id: 1, message: "It's my first post", likesCount: 12},
//       {id: 2, message: "Hi! I'm learning React",  likesCount: 152},
//     ],
//     newPostText: 'Write your message'
//   },
//   dialogsPage: {
//     dialogs: [
//       {id: 1, name: 'Dimych'},
//       {id: 2, name: 'Maksim'},
//       {id: 3, name: 'Kate'},
//       {id: 4, name: 'Vanya'},
//       {id: 5, name: 'Andrew'},
//     ],
//     messages: [
//       {id: 1, message: "Hello my friend!"},
//       {id: 2, message: "What's up! Can you help me?"},
//       {id: 3, message: 'Yup!'},
//       {id: 4, message: "Cool!"},
//       {id: 5, message: 'Can you tell me what problems you have and we will solve its together '},
//     ],
//     newMessage: 'Write your message'
//   },
//   sidebar: {
//     friends: [
//       {id: 1, name: 'Maksim'},
//       {id: 2, name: 'Vanya'},
//       {id: 3, name: 'Alex'},
//       {id: 4, name: 'Andrew'},
//       {id: 5, name: 'Sergey'},
//     ]
//   }
// }

// export const addPost = () => {
//   let newPost: PostTypeProps = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }
// export const addMessage = () => {
//   let newMessage: MessageType = {
//     id: 5,
//     message: state.dialogsPage.newMessage
//   };
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessage = '';
//   rerenderEntireTree(state);
// }
//
// export const updateNewMessageText = (newMessage: string) => {
//   state.dialogsPage.newMessage = newMessage;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer: (state: StateType) => void) => {
//   rerenderEntireTree = observer; // наблюдатель, pattern

