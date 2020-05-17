import React from 'react';
import style from './Navbar.module.css'

const Logo = () => {
    return (
        <div className={`${style.mainNavbar}`}>
            <div>
                <a href='#'>Профиль</a>
            </div>
            <div>
                <a href='#'>Сообщения</a>
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
        </div>
    );
}

export default Logo;
