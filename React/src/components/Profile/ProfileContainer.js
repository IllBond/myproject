import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileDataThunk, savePhotoThunk, setNewProfileDataThunk,
    setProfile,
    setStatusThunk,
    ToglePreloader,
    updateStatusThunk
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthReducer, profileReducer} from "../../redux/profile-selector";
//AuthReducerSelector - удалил из импорта выше
//profileReducerSelector  - удалил из импорта выше


class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.profileID;

        if (!userID) {
            userID = this.props.AuthReducerID
            if (!userID) {
                this.props.history.push('/users') //редирект на юсерс
            }
        }
        this.props.getProfileDataThunk(userID);
        this.props.setStatusThunk(userID);
    }

    render() {
        return <Profile {...this.props.data} setNewProfileDataThunk={this.props.setNewProfileDataThunk} savePhoto={this.props.savePhotoThunk} isYou={!!this.props.match.params.profileID} updateStatusThunk={this.props.updateStatusThunk} />
    } 
}

let mapStateToProps = (state) => {return {
    data: profileReducer(state),
    AuthReducerID: AuthReducer(state)
}};

export default compose(
    connect(mapStateToProps, {setProfile, ToglePreloader, getProfileDataThunk, setStatusThunk, updateStatusThunk, savePhotoThunk, setNewProfileDataThunk}),
    //withAuthRedirect,    // withAuthRedirect // Наш хок который редиректит на страницу логина
    withRouter
)(ProfileAPI)