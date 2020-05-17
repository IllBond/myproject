import React from 'react';
import style from './Header.module.css'

const Logo = () => {
    return (
        <div className={`${style.mainHeader} ${style.content}` }>
           <div>
               <div className={`${style.item}`}>
                   <a href='#'>Ссылка 1</a>
               </div>
               <div className={`${style.item}`}>
                   <a href='#'>Ссылка 2</a>
               </div>
               <div className={`${style.item}`}>
                   <a href='#'>Ссылка 3</a>
               </div>
           </div>
        </div>
    );
}

export default Logo;
