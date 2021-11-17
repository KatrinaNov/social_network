import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
  let posts = [
    {id: 1, message: "It's my first post", likesCount: 12},
    {id: 2, message: "Hi! I'm learning React",  likesCount: 12},
  ]
  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Maksim'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Vanya'},
    {id: 5, name: 'Andrew'},
  ]
  let messages = [
    {id: 1, message: "Hello my friend!"},
    {id: 2, message: "What's up? Can you help me?"},
    {id: 3, message: 'Yup!'},
    {id: 4, message: "Cool!"},
    {id: 5, message: 'Andrew'},
  ]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="container">
          <main className='main'>
            <Routes>
              <Route path='/profile' element={<Profile posts={posts}/>}/>
              <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
