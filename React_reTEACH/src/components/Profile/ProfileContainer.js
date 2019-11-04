import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileDataThunk,
    setProfile,
    setStatusThunk,
    ToglePreloader,
    updateStatusThunk
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthReirect";
import {compose} from "redux";
import {AuthReducer, AuthReducerSelector, profileReducer, profileReducerSelector} from "../../redux/profile-selector";


class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.profileID;

        if (!userID) {
            userID = this.props.AuthReducerID
            if (!userID) {
                this.props.history.push('/users') //редирект на юсерс
            };
        };
        this.props.getProfileDataThunk(userID);
        this.props.setStatusThunk(userID);
    }


    render() {
        return <Profile {...this.props.data} updateStatusThunk={this.props.updateStatusThunk} />
    } 
}

let mapStateToProps = (state) => {return {

    data: profileReducer(state),
    AuthReducerID: AuthReducer(state)
}};

export default compose(
    connect(mapStateToProps, {setProfile, ToglePreloader, getProfileDataThunk, setStatusThunk, updateStatusThunk}),
    //withAuthRedirect,    // withAuthRedirect // Наш хок который редиректит на страницу логина
    withRouter
)(ProfileAPI)