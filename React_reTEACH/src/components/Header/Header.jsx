import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Prelaoder from "../Preloader/Preloader";

let Header = (props) => {

    return <header className='header_grid'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/514wMrxRESL._SL1350_.jpg" className={s.logo}/>

        <div className={s.auth} >
            <Prelaoder ToglePreloader={props.ToglePreloader}/>
            {props.isAuth === true ? props.login : <NavLink to='/login'>Авторизация</NavLink>}

        </div>
    </header>
}

export default Header;