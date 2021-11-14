import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return ( <>
    <h2 className={s.title}>Messages</h2>
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog + ' ' + s.active}>
          Dimych
        </div>
        <div className={s.dialog}>
          Maksim
        </div>
        <div className={s.dialog}>
          Kate
        </div>
        <div className={s.dialog}>
          Vanya
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