import React, {Fragment} from "react";
import {Form} from "../components/form";
import {Notes} from "../components/notes";

export const Home = () => {

    const notes = new Array(3).fill('').map((_,i)=>({
        id:i, titles: `Note ${i+1}`
    }))

    return (
            <Fragment>
                <Form/>
                <hr/>
                <Notes notes={notes}/>
            </Fragment>
    )
};