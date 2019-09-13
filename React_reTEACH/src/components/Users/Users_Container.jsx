import React from 'react';

import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return (state.usersReducer)
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id))
        },
        unfollow: (id) => {
            dispatch(unfollow(id))
        }
    }
}

let Users_Container = connect(mapStateToProps, mapDispatchToProps)(Users)

export default Users_Container