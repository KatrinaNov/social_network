import {DialogPropsType, MessageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsActionsTypes =
  ReturnType<typeof addMessageCreator>
  | ReturnType<typeof updateNewMessageTextCreator>

let initialState = {

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
}


const dialogsReducer = (state: DialogPropsType = initialState, action: DialogsActionsTypes) => {

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage: MessageType = {
        id: 5,
        message: state.newMessage
      };
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newMessage;
      return state;

    default:
      return state;
  }

}
// actionCreators
export const addMessageCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextCreator = (text: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
} as const)

export default dialogsReducer;