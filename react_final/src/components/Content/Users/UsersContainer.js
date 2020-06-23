import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {follow, getUsers, getUsersCount, setCurrentPage, setPreloader, unfollow} from "../../../Redux/usersReducer";
import * as axios from "axios";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`).then(responce =>{
            this.props.getUsers(responce.data.items)
            this.props.getUsersCount(responce.data.totalCount)
            this.props.setPreloader(false)
        })
    }

    setNewCurrentPage = (number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${number}`).then(responce =>{

            this.props.getUsers(responce.data.items)
            this.props.getUsersCount(responce.data.totalCount)
            this.props.setPreloader(false)
        })
    };

    render () {

        let pagesCount =  Math.ceil(this.props.totalCount / this.props.count)
        let page = []
        for (let i=1; i<=pagesCount; i++) {
            page.push(i)
        }
        return <Users
            page={page}
            setNewCurrentPage={this.setNewCurrentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isPreloader={this.props.isPreloader}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        count: state.users.count,
        currentPage: state.users.currentPage,
        isPreloader: state.users.isPreloader
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
        },
        getUsersCount: (usersCount) => {
            dispatch(getUsersCount(usersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        setPreloader: (state) => {
            dispatch(setPreloader(state))
        }
    }
}

let MessageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default MessageContainer;
