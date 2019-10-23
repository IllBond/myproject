import React from 'react';
import {connect} from "react-redux";
import axios from "axios/index";
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


class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.profileID;
        if (!userID) userID = 1456;
        this.props.getProfileDataThunk(userID);
        this.props.setStatusThunk(userID);
    }



    render() {
        return <Profile {...this.props.data} updateStatusThunk={this.props.updateStatusThunk} />
    }
}

let mapStateToProps = (state) => ({
    data: state.profileReducer
})

export default compose(
    connect(mapStateToProps, {setProfile, ToglePreloader, getProfileDataThunk, setStatusThunk, updateStatusThunk}),
    withAuthRedirect,
    withRouter
)(ProfileAPI)