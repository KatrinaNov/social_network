import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType} from "../../redux/state";

export type StateDialogsType = {
  state: DialogPropsType
}

const Dialogs = (props: StateDialogsType) => {

  let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)

  let messagesElements = props.state.messages
    .map(m => <Message message={m.message} id={m.id}/>)

  let newMessage = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    let message = newMessage.current?.value;
    alert(message);
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
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>Send message</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dialogs;