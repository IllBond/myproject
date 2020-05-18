import React from 'react';
import style from './Content.module.css'

const Logo = () => {
    return (
        <div className={`${style.mainContent}`}>
            <div>
                <strong><div>ФИО</div></strong>
                <strong><div>Статус</div></strong>
                <strong><div>Дата рождения</div></strong>

                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
}

export default Logo;
