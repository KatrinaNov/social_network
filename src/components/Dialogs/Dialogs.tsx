import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  StoreType,
} from "../../redux/store";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

export type StateDialogsType = {
  store: StoreType
  // state: DialogPropsType
  // dispatch: (action: ActionsTypes) => void
  // addMessage: () => void
  // updateNewMessageText: (newText: string) => void
}

const Dialogs = (props: StateDialogsType) => {
  let state = props.store.getState().dialogsPage
  let dispatch = props.store.dispatch.bind(props.store);

  let dialogsElements = state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElements = state.messages
    .map(m => <Message message={m.message} id={m.id}/>)

  const addMessage = () => {
    dispatch(addMessageCreator())
  }
  const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    text ? dispatch(updateNewMessageTextCreator(text)) : dispatch(updateNewMessageTextCreator(''))
  }
  return (<>
      <h2 className={s.title}>Messages</h2>
      <div className={s.dialogs}>
        <div className={s.dialogs__items}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          {/*<div className={`${s.message} ${s.answer}`}>Hello my friend!</div>*/}
          <div className={s.send_message}>
            <textarea
              onChange={onChangeNewMessageText}
              value={state.newMessage}
              placeholder={'Write your message'}
            />
            <button onClick={addMessage}>Send message</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dialogs;