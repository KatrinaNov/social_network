import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

  let messagesElements = state.messages
    .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addNewMessage = (formData: FormDataType) => {
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
          {/*<div className={`${s.message} ${s.answer}`}>Hello my friend!</div>*/}
          <div className={s.send_message}>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
    </>
  )
}

type FormDataType = {
  newMessageBody: string
}

const AddMessageFrom: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={'Enter your message'}
        component={"textarea"}
        name={"newMessageBody"}
      />
      <button>Send message</button>
    </form>
  )
}
const AddMessageReduxForm = reduxForm<FormDataType>({
  //a unique name gor the form
  form: 'dialogAddMessageForm'
})(AddMessageFrom)

export default Dialogs;

