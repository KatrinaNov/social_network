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
}

export type DialogsActionsTypes = ReturnType<typeof addMessageCreator>

const ADD_MESSAGE = "ADD-MESSAGE";

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
  ]
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage: MessageType = {
        id: 5,
        message: action.newMessageBody
      };
      return {...state, messages: [...state.messages, newMessage]}
    default:
      return state;
  }
}
// actionCreators
export const addMessageCreator = (newMessageBody: string) => ({type: ADD_MESSAGE, newMessageBody} as const)

export default dialogsReducer;