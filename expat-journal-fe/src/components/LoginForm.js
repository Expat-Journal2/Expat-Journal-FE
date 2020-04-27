import React, {useEffect} from "react";
import {connect} from "react-redux";

function LoginInForm(){
    return null;
}


const mapStateToProps = state => {
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password

    }
}

export default connect(
    mapStateToProps,
     {LogIn}
     )(LoginInForm)