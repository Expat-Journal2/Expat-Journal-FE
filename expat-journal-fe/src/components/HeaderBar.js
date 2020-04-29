import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { fetchAllPosts } from "../store/actions"
import styled from 'styled-components';
import AddPost from "./AddPost"
import {Button} from "reactstrap"

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


function HeaderBar(props) {

    const {push} = useHistory();
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
        const LogOut = event => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('userId')
        dispatch({type: "LOG_OUT"})
        push("/loggedout")
    }


    return (

        <Navbar>
            <OtherLinks>
                <Link to="/" className="ATag">Foreigner Files</Link>
                <Link to="/dashboard" className="ATag">Dashboard</Link>
                <Link to="/allposts" className="ATag">View All Posts</Link>
                <Link to="#" className="ATag">About</Link>
            </OtherLinks>
            {!props.isLoggedIn && (            <MoreLinks>
                <Link to="/register" className="ATag">Signup <Span> | </Span></Link>
                <Link to="/login"  className="ATag">Login</Link>
            </MoreLinks>)}
            {props.isLoggedIn && (<MoreLinks>
                <Link onClick={toggle}  className="ATag">New Post</Link>
                <AddPost show={modal} toggle={toggle}/>
                <Link onClick={LogOut}  className="ATag">Log Out</Link>

                </MoreLinks>)}

        </Navbar>
    )

}
const mapStateToProps = state => {
    console.log("headerBar", state)
    return {
        isLoggedIn: state.postReducer.isLoggedIn,
        fullname: state.postReducer.fullname
    }
}
export default connect(
    mapStateToProps,
    {}
)(HeaderBar)