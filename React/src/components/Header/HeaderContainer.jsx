import React from 'react';
import {connect} from "react-redux";
import {LogOutThunk, setAuth} from "../../redux/AuthReducer";
import Header from "./Header";
import {ToglePreloader} from "../../redux/AuthReducer";


class HeaderContainerApi extends React.Component {

    render () {
        return <Header LogOutThunk={this.props.LogOutThunk} isAuth={this.props.isAuth} login={this.props.login} ToglePreloader={this.props.isTogle} />
    }
}

let MapStateToProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
        login: state.AuthReducer.login,
        isTogle: state.AuthReducer.ToglePreloader

    }
}

let HeaderContainer = connect(MapStateToProps,{setAuth,ToglePreloader,LogOutThunk})(HeaderContainerApi)

export default HeaderContainer;