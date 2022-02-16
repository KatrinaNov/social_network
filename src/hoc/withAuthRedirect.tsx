import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

export type MapStatePropsTypeForRedirect = {
  isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsTypeForRedirect => ({
  isAuth: true
})

export function withAuthRedirect(Component: any) {
  class RedirectComponent extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to={'/login'}/>
      }
      return <Component {...this.props} />
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


  return ConnectedAuthRedirectComponent
}