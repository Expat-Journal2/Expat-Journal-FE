import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { Login } from "../store/actions"
import styled from 'styled-components'

function LoginInForm(props) {


    return (
        <form>
            <h2>Log In</h2>



            {/* ////////// TEXT INPUTS ////////// */}

            <label>Username:&nbsp;
      <input
                    value={props.username}
                    // onChange={onInputChange}
                    name='name'
                    type='text'
                /></label>


            <label>Password:&nbsp;
      <input
                    value={props.password}
                    // onChange={onInputChange}
                    name='password'
                    type='password'
                /></label>




            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button //onClick={onSubmit} disabled={disabled}
            >Log In</button>
        </form >
    )
}

// export default LoginInForm



const mapStateToProps = state => {
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password

    }
}

export default connect(
    mapStateToProps,
    { Login }
)(LoginInForm)