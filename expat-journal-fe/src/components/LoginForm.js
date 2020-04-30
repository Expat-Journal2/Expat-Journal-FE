import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { useInput } from "../hooks/useInput";
import styled from 'styled-components';
import { useHistory, Link } from "react-router-dom"
import { loginValidation } from "../utils/validation"
import * as yup from 'yup'
import { axiosWithAuth } from "../utils/axiosWithAuth"

///styled components
import { Form, H2, Label, Input, Errors, Button, H5 } from "../assets/StyledComponents"


const initialState = {
    username: "",
    password: ""
}


const initialErrors = {
    username: "",
    password: ""
}

function LoginForm(props) {

    const [user, setUser] = useState({})
    const { push } = useHistory();
    const dispatch = useDispatch();


    const [formValues, setFormValues] = useState(initialState)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [formDisabled, setFormDisabled] = useState(true)


    useEffect(() => {

        loginValidation.isValid(formValues)
            .then(valid => { // either true or false
                setFormDisabled(!valid)
            })
    }, [formValues])


    const submitLogin = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/auth/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                localStorage.setItem('fullname', res.data.fullname)
                dispatch({type: "LOGIN_SUCCESS", payload: res.data})
                push("/dashboard")
            })
            .catch(err => {
                console.log(err.message)
                dispatch({type: "LOGIN_ERROR", payload: err.message})
            })
    }

    const handleChange = event => {

        const name = event.target.name
        const value = event.target.value


        yup
            .reach(loginValidation, name)
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
        <Form>
            <H2>Log In</H2>
            {/* ////////// TEXT INPUTS ////////// */}
            <Label>Username:&nbsp;
                <Input
                    value={user.username}
                    onChange={handleChange}
                    name='username'
                    type='text'
                />
            </Label>
            <Errors>
                {formErrors.username}
            </Errors>
            <Label>Password:&nbsp;
            <Input
                    value={user.password}
                    onChange={handleChange}
                    name='password'
                    type='password'
                />
            </Label>

            <Errors>
                {formErrors.password}
            </Errors>

            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <Button
                onClick={submitLogin}
                disabled={formDisabled}
            >Log In</Button>
            {props.error && (<div className="errorText"> Username or Password Is Incorrect</div>)}
            <H5>Need an account? Click <Link to="/register">HERE</Link> to sign up!</H5>
        </Form >
    )
}
const mapStateToProps = state => {
    return {
        fullname: state.formReducer.fullname,
        username: state.formReducer.username,
        password: state.formReducer.password,
        error: state.postReducer.error
    }
}
export default connect(
    mapStateToProps,
    {}
)(LoginForm)