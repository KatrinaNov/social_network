import React from 'react';
import {addMessageCreator, InitialStateType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
  updateNewMessageText: (text: string) => void
  addMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageText: (text: string) => {
      text ? dispatch(updateNewMessageTextCreator(text)) : dispatch(updateNewMessageTextCreator(''))
    },
    addMessage: () => {
      dispatch(addMessageCreator())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;