import React from "react";
import {Link} from "react-router-dom"

function LoggedOut(){
    return(
        <div className="loggedout">
            <h1>You have successfully logged out!</h1>
            <h4>Click <Link to="/login">HERE</Link> to log in again!</h4>
            <h4>Click <Link to="/signup">HERE</Link> to sign up!</h4>
        </div>
    )
}

export default LoggedOut;
