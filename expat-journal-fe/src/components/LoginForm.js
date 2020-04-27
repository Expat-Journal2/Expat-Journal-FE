import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Login} from "../store/actions"

function LoginForm(props){
    const user= {
        username: props.username,
        password: props.password
    }
    console.log("login form user", user)
    return (
        <button onClick={props.Login(user)} >LOG IN</button>
    )
}


const mapStateToProps = state => {
    console.log(`mapstatetoprops on loginform`,state)
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password

    }
}

export default connect(
    mapStateToProps,
     {Login}
     )(LoginForm)