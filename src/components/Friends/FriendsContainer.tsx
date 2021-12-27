import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {FriendType} from "../../redux/sidebar-reducer";
import Friends from "./Friends";

type MapStatePropsType = {
  friends: Array<FriendType>
}
type MapDispatchToPropsType = {
}

export type FriendsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    friends: state.sidebar.friends,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {}
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;