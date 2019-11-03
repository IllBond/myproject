import React from 'react';
import {LoginingThunk} from "../../redux/AuthReducer";
import Login from "./login";
import {connect} from "react-redux";


class AuthContainer extends React.Component{

    render(){
       return <Login isAuth={this.props.data.isAuth} LoginingThunk={this.props.LoginingThunk}/>
    }
}

let mapStateToProps = (state) => ({
    data: state.AuthReducer
})

export let AuthC = connect(mapStateToProps, {LoginingThunk})(AuthContainer)