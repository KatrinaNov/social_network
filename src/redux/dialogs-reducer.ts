export type DialogItemType = {
  name: string
  id: number
}
export type MessageType = {
  message: string
  id: number
}
export type InitialStateType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
  newMessage: string
}

export type DialogsActionsTypes =
  ReturnType<typeof addMessageCreator>
  | ReturnType<typeof updateNewMessageTextCreator>

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState: InitialStateType = {
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

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage: MessageType = {
        id: 5,
        message: state.newMessage
      };
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessage = '';
      return stateCopy;

    case UPDATE_NEW_MESSAGE_TEXT:
    {
      let stateCopy = {...state}
      stateCopy.newMessage = action.newMessage;
      return stateCopy;
    }


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