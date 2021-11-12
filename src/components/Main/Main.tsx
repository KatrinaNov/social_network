import React from 'react';
import './Main.css';
import Navbar from "../Navbar/Navbar";
import Dialogs from "../Dialogs/Dialogs";
// import Profile from "../Profile/Profile";

const Main = () => {
  return (
    <main className='main'>
      <Navbar/>
      {/*<Profile/>*/}
      <Dialogs/>
    </main>
  );
}
export default Main;