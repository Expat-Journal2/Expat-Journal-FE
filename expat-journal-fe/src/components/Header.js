import React from "react";
import {connect} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {LogOut} from "../store/actions"

function Header(props){

    const {push} = useHistory()

    return (
        <div className="header">
            <h1>Foreigner Files</h1>
            <nav className="headerNav">
                <Link to="/dashboard"><button>Dashboard</button></Link>
                <Link to="/loggedout"><button onClick={LogOut}>Log Out</button></Link>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
return {
    username: state.formReducer.username,
    fullname: state.formReducer.fullname,
    id: state.formReducer.id
}
}
export default connect(
    mapStateToProps,
    {LogOut}
)(Header);