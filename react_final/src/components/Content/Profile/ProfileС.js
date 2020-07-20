import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setPreloader, THUNK_getUser} from "../../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {APIGetUser} from "../../../API/api";


class ProfileС extends React.Component {

    componentDidMount() {
    if (!this.props.match.params.userID) {
        this.props.match.params.userID = 2
    }
        this.props.THUNK_getUser(this.props.match.params.userID)

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
        THUNK_getUser: (id) => {
            dispatch(THUNK_getUser(id))
        },
        setPreloader: (id) => {
            dispatch(setPreloader(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileС));
