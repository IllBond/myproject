import React, {Component} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {getAuthData, setPreloader, THUNK_auth} from "../../../Redux/authReducer";


class AuthContainer extends Component {

    componentDidMount() {
        this.props.THUNK_auth()
    }

    render() {
        return (
           <Auth {...this.props}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isPreloader: state.auth.isPreloader
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        THUNK_auth : ()=>{
            dispatch(THUNK_auth())
        },
        setPreloader : (data)=>{
            dispatch(setPreloader(data))
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);
