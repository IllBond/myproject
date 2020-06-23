import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../../Redux/ProfileReducer";
import * as axios from "axios";
import {setPreloader} from "../../../Redux/usersReducer";
import {withRouter} from "react-router-dom";


class ProfileС extends React.Component {

    componentDidMount() {
    if (!this.props.match.params.userID) {
        this.props.match.params.userID = 2
    }
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+this.props.match.params.userID).then(responce =>{
            this.props.setProfile(responce.data)
            this.props.setPreloader(false)
        })

    }

    render () {

        return <Profile state={this.props.message} isPreloader={this.props.isPreloader}/>
    };
}

const mapStateToProps = (state) => {
    return {
        message: state.profile.message,
        isPreloader: state.profile.isPreloader,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (id) => {
            dispatch(setProfile(id))
        },
        setPreloader: (id) => {
            dispatch(setPreloader(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileС));
