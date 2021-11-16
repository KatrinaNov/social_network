import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
  name: string
  id: number
}
type MessageType = {
  message: string
}

const DialogItem = (props: DialogItemType) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props: MessageType) => {
  return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Maksim'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Vanya'},
    {id: 5, name: 'Andrew'},
  ]
  let messagesData = [
    {id: 1, message: "Hello my friend!"},
    {id: 2, message: "What's up? Can you help me?"},
    {id: 3, message: 'Yup!'},
    {id: 4, message: "Cool!"},
    {id: 5, message: 'Andrew'},
  ]
  return (<>
      <h2 className={s.title}>Messages</h2>
      <div className={s.dialogs}>
        <div className={s.dialogs__items}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
        <div className={s.messages}>
          {/*<div className={`${s.message} ${s.answer}`}>Hello my friend!</div>*/}
          <Message message={messagesData[0].message}/>
          <Message message={messagesData[1].message}/>
          <Message message={messagesData[2].message}/>
          <Message message={messagesData[3].message}/>
        </div>
      </div>
    </>
  )
}

export default Dialogs;