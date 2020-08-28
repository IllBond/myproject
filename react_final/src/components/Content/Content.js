import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileС";
import Autorized from "./Autorized/Autorized";
import News from "./News/News";


const Content = (props) => {

    return (
        <>
              <Switch>
                  <Route exact path="/" render={()=><Redirect to='/profile'/>}/>
                  <Route path="/profile/:userID?" component={ProfileContainer}/>
                  <Route path="/users" component={UsersContainer}/>
                  <Route path="/authorized" component={Autorized}/>
                  <Route path="/dialogs" component={() => <Dialogs users={props.state.dialogs.users}
                                                                   textMessage={props.state.dialogs.textMessage}
                                                                   message={props.state.dialogs.message}
                                                                   dispatch={props.dispatch}
                  />}/>
                  <Route path="/news" component={News}/>
                  <Route path="*" component={()=><div>Проверьте адрес, не нахожу таких страницт</div>}/>
              </Switch>

        </>
    );
}

export default Content;
