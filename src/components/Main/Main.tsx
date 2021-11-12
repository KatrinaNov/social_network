import React from 'react';
import './Main.css';
import Navbar from "../Navbar/Navbar";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import {Route, BrowserRouter, Routes} from 'react-router-dom';

const Main = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
    <main className='main'>
      <Navbar/>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dialogs' element={<Dialogs/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}
export default Main;