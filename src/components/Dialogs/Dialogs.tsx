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

const DialogItem = (props : DialogItemType) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props : MessageType) => {
  return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
  return ( <>
    <h2 className={s.title}>Messages</h2>
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <DialogItem name={"Димыч"} id={1}/>
        <DialogItem name={"Maksim"} id={2}/>
        <DialogItem name={"Kate"} id={3}/>
        <DialogItem name={"Vanya"} id={4}/>
      </div>
      <div className={s.messages}>
        <div className={`${s.message} ${s.answer}`}>Hello my friend!</div>
        <Message message={"What's up? Can you help me?"}/>
        <div className={`${s.message} ${s.answer}`}>Yup!</div>
        <Message message={"Cool!"}/>
      </div>
    </div>
    </>
  )
}

export default Dialogs;