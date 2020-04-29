// dependency imports
import styled from "styled-components";


/////HeaderBar styled components 

export const Navbar = styled.div`
width: 100%;
height:100px;
background: rgba(0, 0, 0, 0.4);
display: flex;
flex-direction: row;
margin: 0 auto;
justify-content: space-around;
padding: 1% 0;
`
export const OtherLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`
export const MoreLinks = styled.div`
display: flex;
flex-direction: row;
width: 20%;
justify-content: space-around;
`
export const Span = styled.span`
color: orange;
align-self:center;
`


////SIGNUP FORM STYLED COMPONENTS

export const Form = styled.form
    `
        display: flex;
        flex-direction: column;
        background-color: lightgrey;
        width: 50%;
        margin: 3% auto;
        padding: 2% 0; 
        `

export const Label = styled.label
    `
        justify-content: flex-end;
        `

export const Input = styled.input
    `
        margin-top: 3%;
        `

export const Button = styled.button
    `
    margin: 3% auto;
width: 30%;

`

//////ADD POST FORM

export const PostForm = styled.form
    `
        display: flex;
        flex-direction: column;
        background-color: lightblue;
        width: 90%;
        margin: 3% auto;
        padding: 2% 0; 
        `

export const PostLabel = styled.label
    `
        justify-content: flex-end;
        `

export const PostTextBox = styled.textarea
    `
        margin-top: 3%;
        width: 50%;
        
        `

export const PostInput = styled.input
    `
        margin-top: 3%;
        `

export const PostButton = styled.button
    `
    margin: 3% auto;
width: 30%;

`