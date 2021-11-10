import React from 'react';
import s from './Header.module.css';

const Header = () => {

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.logo}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq70X7DvMfbGVA_5hDbZGDLBE96A90Qu9NliBRzmn1ziBIxCLQwGUoyqVNu7KFtgljCbs&usqp=CAU' alt='logo'/>
        <div className={s.logo__text}>Летим, вжухх!</div>
        </div>
      </div>
    </header>
  )
    ;
}
export default Header;