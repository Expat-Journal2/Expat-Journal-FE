import React from "react";
import {Link, useHistory} from "react-router-dom"

function Header(){

    const {push} = useHistory()

    return (
        <div className="header">
            <h1>Foreigner Files</h1>
            <nav className="headerNav">
                <Link to="/dashboard"><button onClick={()=>{push("/dashboard")}}>Dashboard</button></Link>
                <Link to="/loggedout"><button>Log Out</button></Link>
            </nav>
        </div>
    )
}

export default Header;