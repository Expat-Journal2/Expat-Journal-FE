import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import { Login } from "../store/actions";
import {useInput} from "../hooks/useInput";
import styled from 'styled-components';

function LoginForm(props) {

const [username, setUserName, handleUserName] = useInput("")
const [password, setPassword, handlePassword] = useInput("")


    return (
        <form>
            <h2>Log In</h2>
            {/* ////////// TEXT INPUTS ////////// */}

            <label>Username:&nbsp;
                <input
                    value={username}
                    onChange={handleUserName}
                    name='name'
                    type='text'
                />
            </label>


            <label>Password:&nbsp;
      <input
                    value={password}
                    onChange={handlePassword}
                    name='password'
                    type='password'
                /></label>




            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button //onClick={onSubmit} disabled={disabled}
            >Log In</button>
        </form >

    )
}



const mapStateToProps = state => {
    console.log(`mapstatetoprops on loginform`, state)
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password

    }
}

export default connect(
    mapStateToProps,
    { Login }
)(LoginForm)
