import React from 'react';
import style from './Header.module.css'
import Link from "./Link/Link";
import AuthContainer from "./Auth/AuthContainer";

const Header = (props) => {
    return (
        <>
          <div className={style.grid}>
              <div className={`${style.content}` }>
                  {props.links.map(item => {
                      return <Link key={item} link={item}/>
                  })}

              </div>
              <div>
                  <AuthContainer />
              </div>
          </div>
        </>
    );
}

export default Header;
