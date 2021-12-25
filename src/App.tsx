import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
  store: any
  state: StateType
  dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar state={props.state.sidebar.friends}/>
        <div className="container">
          <main className='main'>
            <Routes>
              <Route path='/profile'
                     element={<Profile
                       state={props.state.profilePage}
                       dispatch={props.dispatch}
                       // addPost={props.addPost}
                       // updateNewPostText={props.updateNewPostText}
                     />}
              />
              <Route path='/dialogs/*'
                     element={<Dialogs
                       store={props.store}
                       // state={props.state.dialogsPage}
                       // dispatch={props.dispatch}
                       // addMessage={props.addMessage}
                       // updateNewMessageText={props.updateNewMessageText}
                     />}
              />
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
