import React from 'react';
import {connect} from "react-redux";
import axios from "axios/index";
import Profile from "./Profile";
import {setProfile, ToglePreloader} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileAPI extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.profileID
        if (!userID) userID = 2;
        this.props.ToglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(
            response => {
                this.props.ToglePreloader(false);
                this.props.setProfile(response.data);
            }
        )
    }

    render() {
        console.log(this.props)
        return <Profile {...this.props.data} />
    }
}

let mapStateToProps = (state) => ({
    data: state.profileReducer,
});




let ProfileContainer = connect(mapStateToProps, {setProfile, ToglePreloader})(withRouter(ProfileAPI));

export default ProfileContainer