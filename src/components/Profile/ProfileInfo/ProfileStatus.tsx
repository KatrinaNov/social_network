import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
  status: string
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {
  state = {
    editMode: false
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
  }

render() {
  return (
    <>{
      !this.state.editMode && <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
      </div>
    }
      {this.state.editMode && <div>
          <input
              value={this.props.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              // onChange={}
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