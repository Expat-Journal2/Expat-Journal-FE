import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Login } from "../store/actions";
import { useInput } from "../hooks/useInput";
import styled from 'styled-components';
import {useHistory} from "react-router-dom"


import { axiosWithAuth } from "../utils/axiosWithAuth"


const initialState = {
    username: "",
    password: ""
}

function LoginForm(props) {
const [user, setUser] = useState({})
    const {push} = useHistory();
  

    const submitLogin = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/auth/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                push("/dashboard")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = event => {
        setUser({...user, 
            [event.target.name]: event.target.value})   
    }

    return (
        <form>
            <h2>Log In</h2>
            {/* ////////// TEXT INPUTS ////////// */}
            <label>Username:&nbsp;
                <input
                    value={user.username}
                    onChange={handleChange}
                    name='username'
                    type='text'
                />
            </label>
            <label>Password:&nbsp;
      <input
                    value={user.password}
                    onChange={handleChange}

                    name='password'
                    type='password'
                /></label>
            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button 
            onClick={submitLogin} 
            //disabled={disabled}
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