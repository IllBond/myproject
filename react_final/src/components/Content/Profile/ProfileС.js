import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setPreloader, THUNK_getUser, THUNK_GetUserStatus, THUNK_setStatus} from "../../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {
    getAuthId,
    getUserData,
    getUserStatus,
    isPreloaderProfile
} from "../../../selectors/selectors";


class ProfileС extends React.Component {

    componentDidMount() {

    if (!this.props.match.params.userID) {
        let id = this.props.id;
        if (id) {
            this.props.match.params.userID = id
        } else {
            this.props.history.push('/users')
        }


    }

        this.props.THUNK_getUser(this.props.match.params.userID)
        this.props.THUNK_GetUserStatus(this.props.match.params.userID)
    }

    render () {

        return <Profile THUNK_setStatus={this.props.THUNK_setStatus} status={this.props.status} state={this.props.userData} isPreloader={this.props.isPreloader}/>
    };
}

const mapStateToProps = (state) => {
    return {
        userData: getUserData(state),
        status: getUserStatus(state),
        isPreloader: isPreloaderProfile(state),
        id: getAuthId(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        THUNK_getUser: (id) => {
            dispatch(THUNK_getUser(id))
        },
        setPreloader: (id) => {
            dispatch(setPreloader(id))
        },
        THUNK_setStatus: (status) => {
            dispatch(THUNK_setStatus(status))
        },
        THUNK_GetUserStatus: (status) => {
            dispatch(THUNK_GetUserStatus(status))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileС));
