import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formValidation, addPostValidation } from "../utils/validation"
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { AddNewPost } from "../store/actions"
import { connect, useDispatch } from "react-redux"
import Header from "./Header";
import { Modal, Button, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
//styled components
import { PostForm, PostLabel, PostTextBox, PostInput, PostButton } from "../assets/StyledComponents"



const initialFormValues = {
    title: '',
    textbox: '',
    created_at: '',
}

const initialFormErrors = {
    title: '',
    textbox: '',
    created_at: '',
}


function AddPost(props) {
    const { push } = useHistory()
    const dispatch = useDispatch()


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


    return (
        <>
            {/* <Header/> */}
            <Modal isOpen={props.show}>
                <ModalHeader>Add Post</ModalHeader>

                <PostForm onSubmit={(e) => {

                    dispatch(AddNewPost(newPost))
                }}>

                    <PostLabel>Post Title:&nbsp;
                <PostInput
                            value={formValues.title}
                            onChange={onInputChange}
                            name='title'
                            type='text'
                        />
                    </PostLabel>

                    {formErrors.title}

                    <PostLabel>Caption: &nbsp;
                <PostTextBox

                            value={formValues.textbox}
                            onChange={onInputChange}

                            name='textbox'
                            type='text'
                        />
                    </PostLabel>
                    {formErrors.textbox}

                    <PostLabel>Image URL: &nbsp;
                <PostInput

                            value={formValues.img}
                            onChange={onInputChange}

                            name='img'
                            type='text'
                        />
                    </PostLabel>
                    {formErrors.img}

                    <PostLabel>Date added:&nbsp;
                <PostInput

                            value={formValues.created_at}
                            onChange={onInputChange}
                            name='created_at'
                            type='text'
                            placeholder="Ex. Apr 26 2020"
                        />
                    </PostLabel>
                    {formErrors.created_at}

                    {/* ////////// DISABLED CANNOT SUBMIT UNTIL ALL IS COMPLETE ////////// */}


                    <PostButton
                        // onClick={props.toggle} 
                        //onClick={onSubmit}
                        disabled={formDisabled}>Add New Post</PostButton>


                </PostForm >
                <Button onClick={props.toggle}>Close</Button>
            </Modal>
        </>
    )
}


const mapStateToProps = state => {

    return {
        isLoading: state.postReducer.isLoading,
        blogs: state.postReducer.blogs
    }
}
export default connect(
    mapStateToProps,
    { AddNewPost },
)(AddPost)
