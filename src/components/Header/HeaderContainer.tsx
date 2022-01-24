import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean,
}
type MapDispatchToPropsType = {
  authMe: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

  componentDidMount() {
    this.props.authMe();
  }
  render() {
    return <Header {...this.props}/>
  }

}

const mapStateToProps = (state: AppStateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {authMe})(HeaderContainer);