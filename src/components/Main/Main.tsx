import React from 'react';
import './Main.css';
import Navbar from "../Navbar/Navbar";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import News from '../News/News';
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

const Main = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
    <main className='main'>
      <Navbar/>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dialogs' element={<Dialogs/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}
export default Main;