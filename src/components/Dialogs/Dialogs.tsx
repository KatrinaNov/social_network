import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return ( <>
    <h2 className={s.title}>Messages</h2>
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Maksim</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Kate</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Vanya</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={`${s.message} ${s.answer}`}>Hello me friend!</div>
        <div className={s.message}>What's up? Can you help me?</div>
        <div className={`${s.message} ${s.answer}`}>Yup!</div>
        <div className={s.message}>Cool!</div>
      </div>
    </div>
    </>
  )
}

export default Dialogs;