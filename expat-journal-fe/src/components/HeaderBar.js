// dependency imports
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components';
import {Button} from "reactstrap"

// Store imports
import { fetchAllPosts } from "../store/actions"

// component imports
import AddPost from "./AddPost"

//style imports
import {Navbar, OtherLinks} from "../assets/StyledComponents"




const MoreLinks = styled.div`
display: flex;
flex-direction: row;
width: 10%;
justify-content: space-around;
`
const Span = styled.span`
color: orange;
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
                <Link onClick={toggle}  className="ATag"><i class="fas fa-plus"></i></Link>
                <AddPost show={modal} toggle={toggle}/>
                <Link onClick={LogOut}  className="ATag" alt="sign out"><i class="fas fa-sign-out-alt" alt="sign out"></i></Link>

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