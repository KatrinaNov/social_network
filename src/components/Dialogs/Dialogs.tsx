import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFromFormDataType, AddMessageReduxForm} from "./AddMessageForm/AddMessageFrom";

const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

  let messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addNewMessage = (formData: AddMessageFromFormDataType) => {
    props.addMessage(formData.newMessageBody)
  }

  return (<>
      <h2 className={s.title}>Messages</h2>
      <div className={s.dialogs}>
        <div className={s.dialogs__items}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          <div className={s.send_message}>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dialogs;

