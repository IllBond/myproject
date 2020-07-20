import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import MessageContainer from "./Users/UsersContainer";
import ProfileС from "./Profile/ProfileС";
import Autorized from "./Autorized/Autorized";


const Content = (props) => {

    return (
        <>
               <Route path="/profile/:userID?" component={ProfileС}/>
               <Route path="/users" component={MessageContainer}/>
               <Route path="/authorized" component={Autorized}/>
               <Route path="/dialogs" component={() => <Dialogs users={props.state.dialogs.users}
                                                                textMessage={props.state.dialogs.textMessage}
                                                                message={props.state.dialogs.message}
                                                                dispatch={props.dispatch}
               />}/>

        </>
    );
}

export default Content;
