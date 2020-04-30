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
        background: rgba(0, 0, 0, 0.7);
        width: 50%;
        margin: 3% auto;
        padding: 2% 0; 
        border-radius: 10px;
        `

export const H2 = styled.h2
    `
        color: #01D4B4;
`

export const Label = styled.label
    `
        
        color: #01D4B4;
        font-size: 1.1rem;
        font-weight: 500;
        display: inline-block;
        `

export const Input = styled.input
    `
        margin-top: 3%;
        width: 40%;
        opacity: 0.7;
    
        `

export const Errors = styled.div
    `
    font-family: "Roboto";
    color: #FF3636;
    font-weight: 500;
   font-size: 1rem;
`

export const Button = styled.button
    `
    margin: 3% auto;
    width: 30%;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto";
    font-size: 1.2rem;
    font-weight: 600;
    

    &:hover{
        color: #01D4B4;
        background: rgba(0, 0, 0, 0.9);
        transition: 0.5s;
    }

`

export const H5 = styled.h5
    `
    color:  #01D4B4;
        background: rgba(0, 0, 0, 0.8);
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
        color: blue;
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
width: 70%;
`