import React, {Component} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {setPreloader} from "../../../Redux/authReducer";


class AuthContainer extends Component {

    componentDidMount() {
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

        setPreloader : (data)=>{
            dispatch(setPreloader(data))
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);
