import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

  let messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addMessage = () => {
    props.addMessage()
    // dispatch(addMessageCreator())
  }
  const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    text ? props.updateNewMessageText(text) : props.updateNewMessageText('')
    // text ? dispatch(updateNewMessageTextCreator(text)) : dispatch(updateNewMessageTextCreator(''))
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