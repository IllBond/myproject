import React from 'react';
import s from './Profile.module.css'
import Profile_Info from "./Profile_Info/Profile_Info";
import PostsContainer from "./Posts/PostsContainer";

let Profile = () => {
    return <div className={s.profile}>
        <Profile_Info />
        <PostsContainer />
    </div>
}

export default Profile;