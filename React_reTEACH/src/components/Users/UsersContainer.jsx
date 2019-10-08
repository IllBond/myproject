import React from 'react';

import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, setUsers, setCurentPage, setUserCount, ToglePreloader} from "../../redux/UsersReducer";
import axios from "axios/index";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.ToglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersReducer.CurrentPage}&count=${this.props.usersReducer.PageSize}`).then(
            response => {

                this.props.ToglePreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount)
            }
        )
    }

    setNewPage = (pageNumber) => {
        this.props.ToglePreloader(true);
        this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersReducer.PageSize}`).then(
            response => {
                this.props.ToglePreloader(false);
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

                return <Users unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      CurrentPage={this.props.usersReducer.CurrentPage}
                      UsersDate={this.props.usersReducer.UsersDate}
                      setNewPage={this.setNewPage}
                      ToglePreloader={this.props.usersReducer.ToglePreloader}
                      page={page}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
    }
}



let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurentPage,
    setUserCount,
    ToglePreloader
})(UsersApiContainer)

export default UsersContainer