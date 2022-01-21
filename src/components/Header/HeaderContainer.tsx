import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
        // this.props.toggleIsFetching(false)
        // this.props.setUsers(response.data.items);

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