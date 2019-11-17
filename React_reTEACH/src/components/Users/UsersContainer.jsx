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
    ButtonDisableAC,
    getUsersThunk,
    setNewPageThunk,
    unfollowThunk,
    followThunk
} from "../../redux/UsersReducer";
import {compose} from "redux";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.usersReducer.CurrentPage, this.props.usersReducer.PageSize)
    }

    setNewPage = (pageNumber) => {
        this.props.setNewPageThunk(pageNumber, this.props.usersReducer.PageSize)
    };

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
                      followThunk={this.props.followThunk}
                      unfollowThunk={this.props.unfollowThunk}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer,
    }
}


export default compose(connect(mapStateToProps, {
        follow, unfollow, setUsers,
        setCurentPage, setUserCount, ToglePreloader,
        ButtonDisableAC, getUsersThunk, setNewPageThunk,
        unfollowThunk, followThunk
    }),
   // withAuthRedirect // Наш хок который редиректит на страницу логина
)(UsersApiContainer)