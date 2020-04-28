
import { connect } from "react-redux"
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInput } from "../hooks/useInput";
import formValidation from "../utils/validation"
import * as yup from 'yup'
import {useHistory} from 'react-router-dom'



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
        margin-top: 3%;
        `

const Button = styled.button
    `
    margin: 3% auto;
width: 30%;

`
const initialFormValues = {
    ///// TEXT INPUTS /////
    fullname: '',
    username: '',
    ///// DROPDOWN /////
    password: '',
    password2: '',
    ///// CHECKBOXES /////
    termsOfService: false,

}
// 👉 the shape of the validation errors object
const initialFormErrors = {
    fullname: '',
    username: '',
    password: '',
    password2: '',
    termsOfService: false,


}



function SignupForm(props) {
    const {push} = useHistory()

    const [fullname, setFullName, handleFullName] = useInput("");
    const [username, setUserName, handleUserName] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");
    const [password2, setPassword2, handlePassword2] = useInput("")
    const [checked,setChecked] = useState(false);

    function handleChecked() {
        checked ? setChecked(false) : setChecked(true);
    }

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)


    // const verifyPasswordValidator = (password.value, verifyPassword.value) => {
    //     if (verifyPassword.value === password.value)        }
    // }
    // const newUser = {
    //     fullname: formValues.fullname,
    //     username: username,
    //     password: password
    // }

    useEffect(() => {

        formValidation.isValid(formValues)
            .then(valid => { // either true or false
                setFormDisabled(!valid)
            })
    }, [formValues])


    const onSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/auth/register', newUser)
            .then(res => {
                console.log(`submitted reg response`, res.data)
                push('/login')
            })
            .catch(err => {
                console.log(err)
            })

        const newUser = {
            name: formValues.fullname,
            email: formValues.username,
            password: formValues.password,
            password2: formValues.password2,
            termsOfService: formValues.termsOfService

        }

        // postUser(newUser)
        // setFormValues(initialFormValues)
    }


    const onInputChange = evt => {

        const name = evt.target.name
        const value = evt.target.value


        yup
            .reach(formValidation, name)
            .validate(value)
            .then(valid => {

                setFormErrors({
                    ...formErrors,
                    [name]: formValues.name,

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

    const onCheckboxChange = evt => {
        const name = evt.target.name
        const isChecked = evt.target.checked


        yup
            .reach(formValidation, name)
            .validate(isChecked)
            .then(valid => {
                //happy path
                //CLEAR ERROR
                setFormErrors({
                    ...formErrors,
                    [name]: "",

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
            [name]: isChecked,
        })
    }


    return (
        <Form onSubmit={onSubmit}>
            <h2>Signup Form</h2>



            <Label>Name:&nbsp;
                <Input
                    value={formValues.fullname}
                    onChange={onInputChange}
                    name='fullname'
                    type='text'
                />
            </Label>
            {formErrors.fullname}

            <Label>Username:&nbsp;
                <Input

                    value={formValues.username}
                    onChange={onInputChange}

                    name='username'
                    type='text'
                />
            </Label>

            {formErrors.username}

            <Label>Password:&nbsp;
                <Input

                    value={formValues.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </Label>
            {formErrors.password}

            <Label>Verify Password:&nbsp;
                <Input

                    value={formValues.password2}
                    onChange={onInputChange}
                    name='password2'
                    type='password'
                />
            </Label>
            {formErrors.password2}

            {/* ////////// CHECKBOX////////// */}
            <Label>
                <Input
                    checked={formValues.checked}
                    onChange={onCheckboxChange}

                    name='termsOfService'
                    type="checkbox"
                />
                I Agree to the Terms and Conditions
            </Label>

            {formErrors.termsOfService}

            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}

            <Button onClick={onSubmit} disabled={formDisabled}>Sign Up!</Button>

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