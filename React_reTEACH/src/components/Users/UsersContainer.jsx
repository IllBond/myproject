import React from 'react';

import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setUsers,
    setCurentPage,
    setUserCount,
    ToglePreloader,
    ButtonDisableAC
} from "../../redux/UsersReducer";
import {getUserApi} from "../../API/API";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.ToglePreloader(true);
        getUserApi.getUsers(this.props.usersReducer.CurrentPage, this.props.usersReducer.PageSize).then(
            response => {
                this.props.ToglePreloader(false);
                this.props.setUsers(response.items);
                this.props.setUserCount(response.totalCount)
            }
        )
    }

    setNewPage = (pageNumber) => {
        this.props.ToglePreloader(true);
        this.props.setCurentPage(pageNumber);
        getUserApi.getUsers(pageNumber, this.props.usersReducer.PageSize).then(
            response => {
                this.props.ToglePreloader(false);
                this.props.setUsers(response.items);
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
                      ButtonDisableAC={this.props.ButtonDisableAC}
                      CurrentPage={this.props.usersReducer.CurrentPage}
                      UsersDate={this.props.usersReducer.UsersDate}
                      setNewPage={this.setNewPage}
                      ToglePreloader={this.props.usersReducer.ToglePreloader}
                      ButtonDisable={this.props.usersReducer.ButtonDisable}
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
    ToglePreloader,
    ButtonDisableAC
})(UsersApiContainer)

export default UsersContainer