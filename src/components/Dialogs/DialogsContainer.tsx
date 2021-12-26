import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {Store} from "redux";
import Dialogs from "./Dialogs";

export type StateDialogsType = {
  store: Store
  // state: DialogPropsType
  // dispatch: (action: ActionsTypes) => void
  // addMessage: () => void
  // updateNewMessageText: (newText: string) => void
}

const DialogsContainer = (props: StateDialogsType) => {
  let state = props.store.getState().dialogsPage
  let dispatch = props.store.dispatch.bind(props.store);

  const addMessage = () => {
    dispatch(addMessageCreator())
  }
  const onChangeNewMessageText = (text: string) => {
    text ? dispatch(updateNewMessageTextCreator(text)) : dispatch(updateNewMessageTextCreator(''))
  }
  return <Dialogs
    updateNewMessageText = {onChangeNewMessageText}
    addMessage={addMessage}
    dialogsPage = {state}
  />
}

export default DialogsContainer;