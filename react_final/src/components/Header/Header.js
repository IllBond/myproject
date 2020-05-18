import React from 'react';
import style from './Header.module.css'
import Link from "./Link/Link";

const Header = (props) => {
    return (
        <div className={`${style.mainHeader} ${style.content}` }>
           <div>
               {props.links.map(item => {
                   return <Link link={item}/>
               })}
           </div>
        </div>
    );
}

export default Header;
