import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterType} from "../common/WithRouter/withRouter";


export type MapStatePropsType = {
  profile: ProfileType
}
type MapDispatchPropsType = {
  getUserProfile: (param_id: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.userId);
    // let userId = this.props.router.params.userId
    // if (!userId) {
    //   userId = '2'
    // }
    // usersAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data))
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
export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);