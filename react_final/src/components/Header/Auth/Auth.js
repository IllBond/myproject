import React from 'react';
import {NavLink} from "react-router-dom";
import Preloader from "../../Common/Preloader";


const Auth = (props) => {

    return (
        <div>
            <div>
                {props.isPreloader?<Preloader/>:null}
            </div>
            {!props.isAuth?<NavLink to={'authorized'}>Авторизоваться</NavLink>:<span>Привет {props.login}</span>}
        </div>
    );
}

export default Auth;
