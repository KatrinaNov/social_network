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
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostTypeProps} from "./components/Profile/MyPosts/Post/Post";

type StateType = {
  state: {
    profilePage: {
      posts: Array<PostTypeProps>
    }
    dialogsPage: {
      dialogs: Array<DialogItemType>,
      messages: Array<MessageType>,
    }
  }
}
const App = (props: StateType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="container">
          <main className='main'>
            <Routes>
              <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
              <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
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
