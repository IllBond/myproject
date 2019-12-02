import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import UsersOnline from "./UsersOnline/UsersOnline";


let Navbar = (props) => {
    return <nav className='nav_grid'>
                        <div className={s.navbar_menu}>

                            <NavLink to="/profile" activeClassName={s.active} className={s.items}>
                                <div>Пофиль</div>
                            </NavLink>
                            <NavLink to="/messages" activeClassName={s.active} className={s.items}>
                                <div>Сообщения</div>
                            </NavLink>
                            <NavLink to="/news" activeClassName={s.active} className={s.items}>
                                <div>Новости</div>
                            </NavLink>
                            <NavLink to="/music" activeClassName={s.active} className={s.items}>
                                <div>Музыка</div>
                            </NavLink>
                            <NavLink to="/settings" activeClassName={s.active} className={s.items}>
                                <div>Настройки</div>
                            </NavLink>
                            <NavLink to="/users" activeClassName={s.active} className={s.items}>
                                <div>Пользователи</div>
                            </NavLink>

                            <div>
                                <UsersOnline dialogsData={props.dialogsData}/>
                            </div>
                        </div>
                    </nav>


}

export default Navbar;