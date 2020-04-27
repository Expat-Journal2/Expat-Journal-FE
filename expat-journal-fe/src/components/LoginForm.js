import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Login} from "../store/actions"

function LoginInForm(){
    const user= {
        usernane: props.username,
        password: props.password
    }
    return (
        <button onClick={Login(user)}
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password

    }
}

export default connect(
    mapStateToProps,
     {Login}
     )(LoginInForm)