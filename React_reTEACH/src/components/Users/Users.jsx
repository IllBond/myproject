import React from 'react';
import User from "./User/User";

let Users = (props) => {

    let follow = props.follow
    let unfollow = props.unfollow
    console.log(unfollow)

    let newUsers = props.UsersDate.map((d) => {
            return <User key={d.id} state={d} follow={follow} unfollow={unfollow}/>
        }
    )

    return <div>
        {newUsers}
    </div>
}

export default Users