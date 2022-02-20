import {maxLength, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type AddMessageFromFormDataType = {
  newMessageBody: string
}

const maxLength100 = maxLength(100)

const AddMessageFrom: React.FC<InjectedFormProps<AddMessageFromFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={'Enter your message'}
        component={Textarea}
        name={"newMessageBody"}
        validate={[required, maxLength100]}
      />
      <button>Send message</button>
    </form>
  )
}
export const AddMessageReduxForm = reduxForm<AddMessageFromFormDataType>({
  //a unique name gor the form
  form: 'dialogAddMessageForm'
})(AddMessageFrom)