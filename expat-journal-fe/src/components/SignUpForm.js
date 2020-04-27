

import React from 'react'

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
        <form>
            <h2>Signup Form</h2>



            {/* ////////// TEXT INPUTS ////////// */}

            <label>Name:&nbsp;
      <input
                    value={props.name}
                    // onChange={onInputChange}
                    name='name'
                    type='text'
                /></label>

            <label>Username:&nbsp;
      <input
                    value={props.username}
                    // onChange={onInputChange}
                    name='username'
                    type='text'
                /></label>
            <label>Password:&nbsp;
      <input
                    value={props.password}
                    // onChange={onInputChange}
                    name='password'
                    type='password'
                /></label>

            <label>Verify Password:&nbsp;
      <input
                    value={props.verifyPassword}
                    // onChange={onInputChange}
                    name='verifyPassword'
                    type='password'
                /></label>


            {/* ////////// CHECKBOXES ////////// */}
            <label><input

                checked={props.termsOfService}
                //onChange={onCheckboxChange}
                name='termsOfService'
                type="checkbox" /> I Agree to the Terms and Conditions</label>

            {/* ////////// DISABLED PROP CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}
            <button //onClick={onSubmit} disabled={disabled}
            >Sign Up</button>
        </form >
    )
}

export default SignupForm