import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean,
}
type MapDispatchToPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

  componentDidMount() {
    usersAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }

}

const mapStateToProps = (state: AppStateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);