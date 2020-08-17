import React from 'react';
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
                <NavLink  to='/news'>Новости</NavLink>
            </div>
            <div>
                <NavLink  to='/music'>Музыка</NavLink>
            </div>
            <div>
                <NavLink  to='/settings'>Настрйоки</NavLink>
            </div>
        </>
    );
}

export default Navbar;
