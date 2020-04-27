
import { connect } from "react-redux"
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import React from 'react';
import styled from 'styled-components';
import { useInput } from "../hooks/useInput";


const Form = styled.form
    `
        display: flex;
        flex-direction: column;
        background-color: lightgrey;
        width: 50%;
        margin: 3% auto;
        padding: 2% 0; 
        `

const Label = styled.label
    `
        justify-content: flex-end;
        `

const Input = styled.input
    `
        width: 30%;
        margin-top: 3%;
        `

function SignupForm(props) {


    const [fullname, setFullName, handleFullName] = useInput("");
    const [username, setUserName, handleUserName] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");
    const [password2, setPassword2, handlePassword2] = useInput("")
    const [checked, setChecked, handleChecked] = useInput(false);


    // const verifyPasswordValidator = (password.value, verifyPassword.value) => {
    //     if (verifyPassword.value === password.value)        }
    // }
    const newUser = {
        fullname: fullname,
        username: username,
        password: password
    }

    const SubmitRegistration = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/auth/register', newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Form onSubmit={SubmitRegistration}>
            <h2>Signup Form</h2>
            <Label>Name:&nbsp;
                <Input

                    onChange={e => { handleFullName(e.target.value) }}
                    value={fullname}
                    name='fullname'
                    type='text'
                />
            </Label>
            <label>Username:&nbsp;
                <Input
                    value={username}
                    onChange={e => { e.preventDefault(); handleUserName(e.target.value) }}
                    name='username'
                    type='text'
                />
            </label>
            <label>Password:&nbsp;
                <Input
                    value={password}
                    onChange={e => { e.preventDefault(); handlePassword(e.target.value) }}
                    name='password'
                    type='password'
                />
            </label>
            <label>Verify Password:&nbsp;
                <Input
                    value={password2}
                    onChange={e => { e.preventDefault(); handlePassword2(e.target.value) }}
                    name='password2'
                    type='password'
                />
            </label>


            {/* ////////// CHECKBOXES ////////// */}
            <label>
                <Input
                    checked={checked}
                    onChange={e => { e.preventDefault(); handleChecked(e.target.value) }}
                    name='termsOfService'
                    type="checkbox"
                />
                I Agree to the Terms and Conditions
            </label>

            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button disabled={props.isDisabled}
            >Sign Up</button>
        </Form >
    )
}


const mapStateToProps = state => {
    return {
        isDisabled: state.formReducer.isDisabled,
    }
}
export default connect(
    mapStateToProps,
    {},
)(SignupForm)