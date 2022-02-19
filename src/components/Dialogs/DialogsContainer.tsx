import React, {ComponentType} from 'react';
import {addMessageCreator, InitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
  dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
  addMessage: (newMessageBody: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: (newMessageBody: string) => {
      dispatch(addMessageCreator(newMessageBody))
    }
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs);