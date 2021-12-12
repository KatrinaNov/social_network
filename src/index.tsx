import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {StateType} from "./redux/state";

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(<App
      store={store}
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
      // addPost={store.addPost.bind(store)}
      // updateNewPostText={store.updateNewPostText.bind(store)}
      // addMessage={store.addMessage.bind(store)}
      // updateNewMessageText={store.updateNewMessageText.bind(store)}
    />,
    document.getElementById('root')
  );
}
rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
