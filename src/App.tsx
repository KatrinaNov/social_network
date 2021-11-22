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
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType,
  addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="container">
          <main className='main'>
            <Routes>
              <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
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
