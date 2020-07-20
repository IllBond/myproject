import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    PreloaderUserIdAC,
    setPreloader, THUNK_APIFistGetUsers, THUNK_APIGetUsers, THUNK_follow, THUNK_unfollow,
    unfollow
} from "../../../Redux/usersReducer";
import {withAuthRedirect} from "../../HOC/isAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.THUNK_APIFistGetUsers(this.props.count, this.props.currentPage)
    }

    setNewCurrentPage = (number) => {
        this.props.THUNK_APIGetUsers(this.props.count, number)
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
        let page = [];
        for (let i = 1; i <= pagesCount; i++) {
            page.push(i)
        }
        return <Users
            page={page}
            setNewCurrentPage={this.setNewCurrentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setPreloader={this.props.setPreloader}
            isPreloader={this.props.isPreloader}
            preloaderUserId={this.props.PreloaderUserID}
            PreloaderUserIdAC={this.props.PreloaderUserIdAC}
            THUNK_unfollow={this.props.THUNK_unfollow}
            THUNK_follow={this.props.THUNK_follow}

        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        count: state.users.count,
        currentPage: state.users.currentPage,
        isPreloader: state.users.isPreloader,
        isSmallPreloader: state.users.isSmallPreloader,
        PreloaderUserID: state.users.PreloaderUserID,
        isAuth: state.auth.isAuth,

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
        setPreloader: (state) => {
            dispatch(setPreloader(state))
        },
        PreloaderUserIdAC: (id, ispreload) => {
            dispatch(PreloaderUserIdAC(id, ispreload))
        },
        THUNK_APIFistGetUsers: (count, currentPage) => {
            dispatch(THUNK_APIFistGetUsers(count, currentPage))
        },
        THUNK_APIGetUsers: (count, number) => {
            dispatch(THUNK_APIGetUsers(count, number))
        },
        THUNK_unfollow: (id) => {
            dispatch(THUNK_unfollow(id))
        },
        THUNK_follow: (id) => {
            dispatch(THUNK_follow(id))
        }
    }
}

let MessageContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))

export default MessageContainer;
