import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogPropsType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
}
const Dialogs = (props: DialogPropsType) => {

  let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)


  let messagesElements = props.messages
    .map(m => <Message message={m.message} id={m.id}/>)

  return (<>
      <h2 className={s.title}>Messages</h2>
      <div className={s.dialogs}>
        <div className={s.dialogs__items}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          {/*<div className={`${s.message} ${s.answer}`}>Hello my friend!</div>*/}
        </div>
      </div>
    </>
  )
}

export default Dialogs;