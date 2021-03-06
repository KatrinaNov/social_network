import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
  status: string
  updateStatus: (param_id: string) => void
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>{
        !this.state.editMode && <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
        </div>
      }
        {this.state.editMode && <div>
            <input
                value={this.state.status}
                onBlur={this.deactivateEditMode}
                autoFocus={true}
                onChange={this.onStatusChange}
            />
        </div>
        }
      </>
    )
  }
}

export default ProfileStatus;


// const ProfileStatus = (props: ProfileStatusPropsType) => {
//   const [editMode, setEdit] = useState<boolean>(false)
//
//   const editModeHandler = () => {
//     setEdit(true)
//   }
//   const activeModeHandler = () => {
//     setEdit(false)
//   }
//   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//
//   }
//
//   return (
//     <>{
//       !editMode ? <div>
//         <span onDoubleClick={editModeHandler}>{props.status}</span>
//       </div>
//         :  <div>
//           <input
//             value={props.status}
//             onBlur={activeModeHandler}
//             onChange={onChangeHandler}
//           />
//         </div>
//     }
//     </>
//   )
// }
// export default ProfileStatus;