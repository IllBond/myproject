import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id))
        },
        unfollow: (id) => {
            dispatch(unfollow(id))
        },
        getUsers: (data) => {
            dispatch(getUsers(data))
        }
    }
}

let MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default MessageContainer;
