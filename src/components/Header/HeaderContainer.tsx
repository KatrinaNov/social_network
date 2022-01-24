import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean,
}
type MapDispatchToPropsType = {
  getAuthUserData: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props}/>
  }

}

const mapStateToProps = (state: AppStateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);