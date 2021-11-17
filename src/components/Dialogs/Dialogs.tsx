import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Maksim'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Vanya'},
    {id: 5, name: 'Andrew'},
  ]
  let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)

  let messages = [
    {id: 1, message: "Hello my friend!"},
    {id: 2, message: "What's up? Can you help me?"},
    {id: 3, message: 'Yup!'},
    {id: 4, message: "Cool!"},
    {id: 5, message: 'Andrew'},
  ]
  let messagesElements = messages
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