import React from 'react';
import Navbar from "../Navbar/Navbar";
import Friends from "../Friends/Friends";
import {FriendType} from "../../redux/store";

type SidebarType = {
  state: Array<FriendType>
}

const Sidebar = (props: SidebarType) => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Friends friends={props.state}/>
    </div>
  );
}
export default Sidebar;