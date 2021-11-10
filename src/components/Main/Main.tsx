import React from 'react';
import './Main.css';
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

const Main = () => {
  return (
    <main className='main'>
      <Navbar/>
      <Profile/>
    </main>
  );
}
export default Main;