import React from 'react';
import style from './Header.module.css'
import Link from "./Link/Link";

const Header = (props) => {
    return (
        <>
           <div className={`${style.content}` }>
               {props.links.map(item => {
                   return <Link link={item}/>
               })}
           </div>
        </>
    );
}

export default Header;
