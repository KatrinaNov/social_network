import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterType} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsType = {
  profile: ProfileType
}
type MapDispatchPropsType = {
  getUserProfile: (param_id: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.getUserProfile(userId);
    // usersAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data))
  }
  render() {
    return (
      <Profile profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
})

export default compose<ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);