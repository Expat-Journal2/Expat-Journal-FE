import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formValidation, addPostValidation } from "../utils/validation"
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { AddNewPost } from "../store/actions"
import { connect, useDispatch } from "react-redux"
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';
//styled components
import { PostForm, PostLabel, PostTextBox, PostInput, PostButton, Errors } from "../assets/StyledComponents"







function EditPost(props) {
    const history = useHistory()

    const initialFormValues = {
        title: props.blogToEdit.title,
        textbox: props.blogToEdit.textbox,
        created_at: props.blogToEdit.created_at,
        img: props.blogToEdit.img
    }

    const initialFormErrors = {
        title: '',
        textbox: '',
        created_at: '',
    }

    useEffect(() => {
        setFormValues({
            title: props.blogToEdit.title,
            textbox: props.blogToEdit.textbox,
            created_at: props.blogToEdit.created_at,
            img: props.blogToEdit.img
        })

    }, [props.blogToEdit.title])


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
        e.preventDefault()
        axiosWithAuth()
            .put(`/api/users/${props.blogToEdit.user_id}/blogs/${props.blogToEdit.id}`, formValues)
            .then(res => {

                history.push("/dashboard")
                history.go(0)
            })
            .catch(err => alert(err))
    }



    return (
        <>
            {/* <Header/> */}
            <Modal isOpen={props.show}>
                <ModalHeader ><h2>Edit Post</h2></ModalHeader>
                <ModalBody>
                    <PostForm onSubmit={(e) => handleSubmit(e)}>

                        <PostLabel>Post Title:&nbsp;
                        <PostInput
                                value={formValues.title}
                                onChange={onInputChange}
                                name='title'
                                type='text'
                            />
                        </PostLabel>

                        <Errors>
                            {formErrors.title}
                        </Errors>


                        <PostLabel>Date added:&nbsp;
                <PostInput

                                value={formValues.created_at}
                                onChange={onInputChange}
                                name='created_at'
                                type='text'
                                placeholder="Ex. Apr 26 2020"
                            />
                        </PostLabel>
                        <Errors>
                            {formErrors.created_at}
                        </Errors>


                        <PostLabel>Image URL: &nbsp;
                        <PostInput
                                value={formValues.img}
                                onChange={onInputChange}
                                name='img'
                                type='text'
                            />
                        </PostLabel>
                        <Errors>
                            {formErrors.img}
                        </Errors>

                        <PostLabel>Caption: &nbsp;
                        <br />
                            <PostTextBox

                                value={formValues.textbox}
                                onChange={onInputChange}

                                name='textbox'
                                type='text'
                            />
                        </PostLabel>
                        <Errors>
                            {formErrors.textbox}
                        </Errors>

                        {/* ////////// DISABLED CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}


                        <PostButton
                            // onClick={props.toggle} 
                            //onClick={onSubmit}
                            disabled={formDisabled}>Edit Post</PostButton>

                    </PostForm >

                </ModalBody>
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
