export type FriendType = {
  id: number
  name: string
}
export type InitialSidebarType = {
  friends: Array<FriendType>
}

export type SideBarActionsTypes = any;

let initialState: InitialSidebarType = {
  friends: [
    {id: 1, name: 'Maksim'},
    {id: 2, name: 'Vanya'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Sergey'},
  ]
}

const sidebarReducer = (state: InitialSidebarType = initialState, action: SideBarActionsTypes): InitialSidebarType => {
  return state;
}

export default sidebarReducer;