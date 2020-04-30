import React from "react";
import { Link } from "react-router-dom"

function LoggedOut() {
    return (
        <div className="loggedout">
            <h1>You have successfully logged out!</h1>
            <p>Hope to see you back soon!</p>
        </div>
    )
}

export default LoggedOut;
