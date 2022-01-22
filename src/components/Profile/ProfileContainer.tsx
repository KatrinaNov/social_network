import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterType} from "../common/WithRouter/withRouter";
import {usersAPI} from "../../api/api";


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
    usersAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data))
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