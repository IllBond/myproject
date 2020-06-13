import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <NavLink  to='/profile'>Профиль</NavLink>
            </div>
            <div>
                <NavLink  to='/dialogs'>Сообщения</NavLink>
            </div>
            <div>
                <NavLink  to='/users'>Users</NavLink>
            </div>
            <div>
                <a href='#'>Новости</a>
            </div>
            <div>
                <a href='#'>Музыка</a>
            </div>
            <div>
                <a href='#'>Настрйоки</a>
            </div>
        </>
    );
}

export default Navbar;
