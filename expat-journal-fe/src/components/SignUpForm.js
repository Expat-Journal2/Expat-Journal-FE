
import { connect } from "react-redux"
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInput } from "../hooks/useInput";
import { formValidation } from "../utils/validation"
import * as yup from 'yup'
import { useHistory, Link } from 'react-router-dom'

///styled components
import { Form, H2, Label, Input, Errors, Button, H5 } from "../assets/StyledComponents"


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
    const { push } = useHistory()


    const [checked, setChecked] = useState(false);



    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)


    useEffect(() => {

        formValidation.isValid(formValues)
            .then(valid => { // either true or false
                setFormDisabled(!valid)
            })
    }, [formValues])
    const newUser = {
        fullname: formValues.fullname,
        username: formValues.username,
        password: formValues.password,
    }

    const onSubmit = (event) => {
        event.preventDefault();

        axiosWithAuth()
            .post('/api/auth/register', newUser)
            .then(res => {
                push('/login')
            })
            .catch(err => {
                alert(err)
            })


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
            <H2>Signup Form</H2>



            <Label>Name:&nbsp;
                <Input
                    value={formValues.fullname}
                    onChange={onInputChange}
                    name='fullname'
                    type='text'
                />
            </Label>
            <Errors>
                {formErrors.fullname}
            </Errors>

            <Label>Username:&nbsp;
                <Input

                    value={formValues.username}
                    onChange={onInputChange}

                    name='username'
                    type='text'
                />
            </Label>
            <Errors>
                {formErrors.username}
            </Errors>

            <Label>Password:&nbsp;
                <Input

                    value={formValues.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </Label>
            <Errors>
                {formErrors.password}
            </Errors>
            <Label>Verify Password:&nbsp;
                <Input

                    value={formValues.password2}
                    onChange={onInputChange}
                    name='password2'
                    type='password'
                />
            </Label>
            <Errors>
                {formErrors.password2}
            </Errors>
            <Label>
                <Input id="checkbox"
                    checked={formValues.checked}
                    onChange={onCheckboxChange}

                    name='termsOfService'
                    type="checkbox"
                />
                 &nbsp; I Agree to the Terms and Conditions
            </Label>
            <Errors>
                {formErrors.termsOfService}
            </Errors>
            {/* ////////// DISABLED CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}

            <Button onClick={onSubmit} disabled={formDisabled}>Sign Up!</Button>
            <H5>Already Have An Account? Click <Link to="/login">HERE</Link> to log in!</H5>
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