import React from 'react';
import s from './Header.module.css';

let Header = () => {
    return <header className='header_grid'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/514wMrxRESL._SL1350_.jpg" className={s.logo}/>
    </header>
}

export default Header;