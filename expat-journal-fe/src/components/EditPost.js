import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {formValidation, addPostValidation} from "../utils/validation"
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import {AddNewPost} from "../store/actions"
import {connect, useDispatch} from "react-redux"


import { Modal} from 'reactstrap';


const Form = styled.form
    `
        display: flex;
        flex-direction: column;
        background-color: lightblue;
        width: 90%;
        margin: 3% auto;
        padding: 2% 0; 
        `

const Label = styled.label
    `
        justify-content: flex-end;
        `

const TextBox = styled.input
    `
        margin-top: 3%;
        height: 100px;
        width: 50%;
        
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





function EditPost(props) {

    const initialFormValues = {
        title: props.title,
        textbox: props.textbox,
        created_at: props.created_at,
        img: props.img
    }
    
    const initialFormErrors = {
        title: '',
        textbox: '',
        created_at: '',
    }


    const { push } = useHistory()
    const dispatch = useDispatch()

    console.log(props)

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)


    useEffect(() => {
        addPostValidation.isValid(formValues)
            .then(valid => { // either true or false
                setFormDisabled(!valid)
            })
    }, [formValues])

    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        yup
            .reach(addPostValidation, name)
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
    const newPost = {
        title: formValues.title,
        textbox: formValues.textbox,
        img: formValues.img,
        created_at: formValues.created_at,
    }

    const handleSubmit = (e) => {

    }


    return (
    <>  
        {/* <Header/> */}
        <Modal isOpen={props.show}>

        
        <Form onSubmit={(e)=>handleSubmit}>
            <h2>Add Post</h2>
            <Label>Post Title:&nbsp;
                <Input
                    value={formValues.title}
                    onChange={onInputChange}
                    name='title'
                    type='text'
                />
            </Label>

            {formErrors.title}

            <Label>Caption: &nbsp;
                <TextBox 

                    value={formValues.textbox}
                    onChange={onInputChange}

                    name='textbox'
                    type='text'
                />
            </Label>
            {formErrors.textbox}

            <Label>Image URL: &nbsp;
                <Input

                    value={formValues.img}
                    onChange={onInputChange}

                    name='img'
                    type='text'
                />
            </Label>
            {formErrors.img}

            <Label>Date added:&nbsp;
                <Input

                    value={formValues.created_at}
                    onChange={onInputChange}
                    name='created_at'
                    type='text'
                    placeholder="Ex. Apr 26 2020"
                />
            </Label>
            {formErrors.created_at}

            {/* ////////// DISABLED CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}


            <Button 
            onClick={props.toggle} 

            /*onClick={onSubmit} disabled={!formDisabled}*/ 
            >
                Add New Post
                </Button>


        </Form >
        <Button onClick={props.toggle}>Close</Button>
        </Modal>
    </>
    )
}
export default EditPost;

// const mapStateToProps = state => {
//     console.log(`add post`, state)
//     return {
// isLoading: state.postReducer.isLoading,
// blogs: state.postReducer.blogs
//     }
// }
// export default connect(
//     mapStateToProps,
//     {AddNewPost},
// )(EditPost)
