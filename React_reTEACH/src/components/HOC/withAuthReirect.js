import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export let withAuthRedirect = (Component) => {

    class redirectComponent extends React.Component{
        render () {
            if (!this.props.isAuth) {return <Redirect to='/login'/>}
            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.AuthReducer.isAuth
        }
    };

    return connect(mapStateToProps)(redirectComponent)

    // Было
    // let ConnectedAuthRedirectComponent = connect(mapStateToProps)(redirectComponent)
    // ConnectedAuthRedirectComponent
}