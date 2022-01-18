import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
//
// type AppPropsType = {
//   store: Store
//   state: StateType
//   dispatch: (action: ActionsTypes) => void
// }

const App = () => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <div className="container">
          <main className='main'>
            <Routes>
              <Route path='/profile/*'
                     element={<ProfileContainer/>}
              />
              <Route path='/dialogs/*'
                     element={<DialogsContainer />}
              />
              <Route path='/users'
                     element={<UsersContainer/>}
              />
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </main>
        </div>
      </div>
  );
}


export default App;
