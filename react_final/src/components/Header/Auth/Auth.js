import React from 'react';
import {NavLink} from "react-router-dom";
import Preloader from "../../Common/Preloader";
import {connect} from "react-redux";
import {THUNK_auth_logOut} from "../../../Redux/authReducer";


const Auth = (props) => {

    return (
        <div>
            <div>
                {props.isPreloader?<Preloader/>:null}
            </div>
            {!props.isAuth?<NavLink to={'/authorized'}>Авторизоваться</NavLink>:<span>Привет {props.login} | <span onClick={props.THUNK_auth_logOut}>X</span></span>}
        </div>
    );
}


export default connect(null,{THUNK_auth_logOut})(Auth);
