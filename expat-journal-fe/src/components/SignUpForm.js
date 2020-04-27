

import React from 'react'
import styled from 'styled-components'

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
    // const {
    //     values,
    //     onInputChange,
    //     onCheckboxChange,
    //     onSubmit,
    //     disabled,
    //    
    // } = props

    return (
        <Form>
            <h2>Signup Form</h2>



            {/* ////////// TEXT INPUTS ////////// */}

            <Label>Name:&nbsp;
      <Input
                    value={props.name}
                    // onChange={onInputChange}
                    name='name'
                    type='text'
                /></Label>

            <label>Username:&nbsp;
      <Input
                    value={props.username}
                    // onChange={onInputChange}
                    name='username'
                    type='text'
                /></label>
            <label>Password:&nbsp;
      <Input
                    value={props.password}
                    // onChange={onInputChange}
                    name='password'
                    type='password'
                /></label>

            <label>Verify Password:&nbsp;
      <Input
                    value={props.verifyPassword}
                    // onChange={onInputChange}
                    name='verifyPassword'
                    type='password'
                /></label>


            {/* ////////// CHECKBOXES ////////// */}
            <label><Input

                checked={props.termsOfService}
                //onChange={onCheckboxChange}
                name='termsOfService'
                type="checkbox" /> I Agree to the Terms and Conditions</label>

            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button //onClick={onSubmit} disabled={disabled}
            >Sign Up</button>
        </Form >
    )
}

export default SignupForm