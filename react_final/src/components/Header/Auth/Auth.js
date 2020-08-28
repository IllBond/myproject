import React from 'react';
import {NavLink} from "react-router-dom";
import Preloader from "../../Common/Preloader";
import {connect} from "react-redux";
import {THUNK_auth_logOut} from "../../../Redux/authReducer";
import {setNewPreloader} from "../../../Redux/PreloaderReducer";

const Auth = (props) => {
    return (
        <div>
            <div>
                {props.isNewPreloader ? <Preloader setNewPreloader={props.setNewPreloader}/> : null}
            </div>
            {!props.isAuth ? <NavLink to={'/authorized'}>Авторизоваться</NavLink> : <span>Привет {props.login} | <span onClick={props.THUNK_auth_logOut}>X</span></span>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isNewPreloader:state.preloaderReducer.isNewPreloader
    }
}

export default connect(mapStateToProps, {THUNK_auth_logOut,
    setNewPreloader})(Auth);
