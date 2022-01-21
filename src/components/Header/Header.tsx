import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq70X7DvMfbGVA_5hDbZGDLBE96A90Qu9NliBRzmn1ziBIxCLQwGUoyqVNu7KFtgljCbs&usqp=CAU'
          alt='logo'/>
        <div className={s.logo__text}>Летим, фшухх!</div>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
    ;
}
export default Header;