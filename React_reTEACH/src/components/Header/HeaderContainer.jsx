import React from 'react';
import {connect} from "react-redux";
import {authThunk, setAuth} from "../../redux/AuthReducer";
import Header from "./Header";
import {ToglePreloader} from "../../redux/AuthReducer";


class HeaderContainerApi extends React.Component {
    componentDidMount() {
        this.props.authThunk()
    }
    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} ToglePreloader={this.props.isTogle} />
    }
}

let MapStateToProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
        login: state.AuthReducer.login,
        isTogle: state.AuthReducer.ToglePreloader

    }
}

let HeaderContainer = connect(MapStateToProps,{setAuth,ToglePreloader,authThunk})(HeaderContainerApi)

export default HeaderContainer;