import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { useInput } from "../hooks/useInput";
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import { formValidation } from "../utils/validation"
import * as yup from 'yup'


import { axiosWithAuth } from "../utils/axiosWithAuth"


const initialState = {
    username: "",
    password: ""
}


const initialErrors = {
    username: "",
    password: ""
}

function LoginForm(props) {


    const [formValues, setFormValues] = useState(initialState)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    const [user, setUser] = useState({})
    const { push } = useHistory();


    const submitLogin = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/auth/login', formValues)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                push("/dashboard")
            })
            .catch(err => {
                console.log(err.data.message)
                const error = err.data.message
            })
    }

    const handleChange = event => {

        const name = event.target.name
        const value = event.target.value


        yup
            .reach(formValidation, name)
            .validate(value)
            .then(valid => {

                setFormErrors({
                    ...formErrors,
                    [name]: formValues.name
                })
            })

            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.message
                })
            })


        setFormValues({
            ...formValues,
            [name]: value,
        })
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
            <div>
                {formErrors.username}
            </div>
            <label>Password:&nbsp;
      <input
                    value={user.password}
                    onChange={handleChange}

                    name='password'
                    type='password'
                /></label

            <div>
                {formErrors.password}
            </div>

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
    {}
)(LoginForm)