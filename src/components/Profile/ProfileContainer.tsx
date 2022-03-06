import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterType} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsType = {
  profile: ProfileType
  status: string
  authorizedUserId: string | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (param_id: string) => void
  getUserStatus: (param_id: string) => void
  updateStatus: (param_id: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    if (userId) {
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId)
    }

  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);