import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterType} from "../common/WithRouter/withRouter";


export type MapStatePropsType = {
  profile: ProfileType
}
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);