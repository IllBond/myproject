import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Navbar} from "./components/navbar";
import {Alert} from "./components/alert";
import {AlertState} from "./context/alert/alertState";

function App() {
    return (
        <AlertState>


            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/about"} component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    );
}

export default App;
