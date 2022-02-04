import React, {ComponentType} from 'react';
import {addMessageCreator, InitialStateType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    dialogsPage: state.dialogsPage,
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


export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs);