import React from 'react';
import logo_img from "../../media/logo.png"
import style from './Logo.module.css'

const Logo = () => {
    return (
        <div className={`${style.mainLogo}`}>
            <img src={logo_img} alt="logo"/>
        </div>
    );
}

export default Logo;
