import React from 'react';
import axios from "axios/index";
import {connect} from "react-redux";
import {setAuth} from "../../redux/AuthReducer";
import Header from "./Header";
import {ToglePreloader} from "../../redux/AuthReducer";

class HeaderContainerApi extends React.Component {
    componentDidMount() {
        this.props.ToglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true} ).then(
            response => {
                this.props.ToglePreloader(false);

                if (response.data.resultCode === 0) {
                    this.props.setAuth(response.data.data)
                }
            }
        )
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

let HeaderContainer = connect(MapStateToProps,{setAuth,ToglePreloader})(HeaderContainerApi)

export default HeaderContainer;