import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { fetchAllPosts } from "../store/actions"
import styled from 'styled-components';



const Navbar = styled.div`
width: 100%;
background: rgba(0, 0, 0, 0.6);
display: flex;
flex-direction: row;
margin: 0 auto;
justify-content: space-around;
padding: 1% 0;
`
const OtherLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
width: 70%;
`
const MoreLinks = styled.div`
display: flex;
flex-direction: row;
width: 10%;
justify-content: space-around;
`
const Span = styled.span`
color: orange;
`
const ATag = styled.a`
margin: 1.5% auto;
font-family: Roboto;
font-size: 1.3rem;
display: flex;
align-items: center;
color: #01D4B4;
text-decoration: none;
justify-content: center;
`


function HeaderBar() {





    return (

        <Navbar>
            <OtherLinks>
                <ATag href="#">Foreigner Files</ATag>
                <ATag href="#">Home</ATag>
                <ATag href="#">About</ATag>
                <ATag href="#">Contact</ATag>
            </OtherLinks>
            <MoreLinks>
                <ATag href="#">Signup <Span> | </Span></ATag>
                <ATag href="#">Login</ATag>
            </MoreLinks>
        </Navbar>
    )

}

export default HeaderBar