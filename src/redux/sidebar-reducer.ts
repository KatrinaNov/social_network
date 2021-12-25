import {SidebarType} from "./store";

export type SideBarActionsTypes = any;

let initialState = {
  friends: [
    {id: 1, name: 'Maksim'},
    {id: 2, name: 'Vanya'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Sergey'},
  ]
}

const sidebarReducer = (state: SidebarType = initialState, action: SideBarActionsTypes) => {
  return state;
}

export default sidebarReducer;