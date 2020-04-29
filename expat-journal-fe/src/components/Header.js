import React, {useState} from "react";
import {connect, useDispatch} from "react-redux"
import {Link, useHistory} from "react-router-dom"
import {fetchAllPosts} from "../store/actions"
import AddPost from "./AddPost";


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
                <Link to="/dashboard"><button>Dashboard</button></Link>
                <Link to="/allposts"><button>All Posts</button></Link>
                {/* <Link to="/addpost"><button>New Post</button></Link> */}
                <button onClick={toggle}>New Post</button>
                <AddPost show={modal} toggle={toggle}/>
                <button onClick={LogOut}>Log Out</button>
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