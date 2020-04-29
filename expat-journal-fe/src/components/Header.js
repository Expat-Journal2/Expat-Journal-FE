import React, {useState} from "react";
import {connect, useDispatch} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {fetchAllPosts} from "../store/actions"
import AddPost from "./AddPost";
import {Button} from "reactstrap"


function Header(props){

    const [modal, setModal] = useState(false)

    const {push} = useHistory()

    const dispatch = useDispatch()

    const toggle = () => setModal(!modal)

    const LogOut = event => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('userId')
        push("/loggedout")
    }

    return (
        <div className="header">
            <h1>Foreigner Files</h1>
            <nav className="headerNav">
                <Link to="/dashboard"><Button>Dashboard</Button></Link>
                <Link to="/allposts"><Button>All Posts</Button></Link>
                {/* <Link to="/addpost"><button>New Post</button></Link> */}
                <Button color="primary" onClick={toggle}>New Post</Button>
                <AddPost show={modal} toggle={toggle}/>
                <Button color="danger" onClick={LogOut}>Log Out</Button>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
return {
    username: state.formReducer.username,
    fullname: state.formReducer.fullname,
    id: state.formReducer.id
}
}
export default connect(
    mapStateToProps,
    {fetchAllPosts}
)(Header);