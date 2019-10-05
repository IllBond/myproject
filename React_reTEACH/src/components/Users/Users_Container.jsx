import React from 'react';

import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, setusers, setCurentPage, setUserCount} from "../../redux/UsersReducer";
import axios from "axios/index";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersReducer.CurrentPage}&count=${this.props.usersReducer.PageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount)
            }
        )
    }

    setNewPage = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersReducer.PageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        )
    }


    render() {
        let pageCount = Math.ceil(this.props.usersReducer.TotalUserSize / this.props.usersReducer.PageSize);

        let page = [];
        for (let i = 1; i <= pageCount; i++) {
            page.push(i)
        }
        console.log(this)
        return <Users unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      CurrentPage={this.props.usersReducer.CurrentPage}
                      UsersDate={this.props.usersReducer.UsersDate}
                      setNewPage={this.setNewPage}
                      page={page}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id))
        },
        unfollow: (id) => {
            dispatch(unfollow(id))
        },
        setUsers: (obj) => {
            dispatch(setusers(obj))
        },
        setCurentPage: (page) => {
            dispatch(setCurentPage(page))
        },
        setUserCount: (users) => {
            dispatch(setUserCount(users))
        }
    }
};

let Users_Container = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default Users_Container