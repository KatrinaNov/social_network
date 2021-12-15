import {DialogPropsType, MessageType, PostTypeProps} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsActionsTypes =
  ReturnType<typeof addMessageCreator>
  | ReturnType<typeof updateNewMessageTextCreator>

const dialogsReducer = (state: DialogPropsType, action: DialogsActionsTypes) => {

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