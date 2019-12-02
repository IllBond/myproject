import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsDate: state.profileReducer.postsData,
        newPostField: state.profileReducer.newPostField

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showValTextArea: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;