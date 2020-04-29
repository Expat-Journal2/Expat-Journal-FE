import React, {useEffect,useState} from "react";
import Header from "./Header";
import {fetchUserBlogs, fetchUserInfo, editPost} from "../store/actions/index"
import {connect, useDispatch} from "react-redux";
import AddPost from "./AddPost"
import AllPosts from "./AllPosts";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import EditPost from "./EditPost"



function Dashboard (props){


    const [modal, setModal] = useState(false)
    const [blogToEdit, setBlogToEdit] = useState({})
    const toggle = () => setModal(!modal)

    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserInfo())
        dispatch(fetchUserBlogs())
    },[localStorage.getItem('userId')])

    const handleDelete = (id) =>  {
        axiosWithAuth()
        .delete(`/api/users/${props.id}/blogs/${id}`)
        .then(res => {
            console.log(res)
            history.push("/dashboard")
            history.go(0)
            })
        .catch(err => console.log(err))    
    }

    function handleUpdate(blog) {
        console.log(blog)
        setBlogToEdit(blog)
        console.log("edit toggle",modal)
        
    }

console.log("dashboard props",props)
    return(
        <div className="dashboard">
            <Header />
            {props.blogs && (
            <div className="postsContainer">
                {props.blogs.map(blog => {
                return (
                <div key={blog.id} className="post-hero">
                    <h3>{blog.title}</h3>
                    <p>{blog.textbox}</p>
                    <img src={blog.img} />
                    <button onClick={e => handleDelete(blog.id)}>Delete</button>
                    <button onClick={e => handleUpdate(blog)}>Update</button>
                </div>
                )
            })}
            </div>
            )}
            <EditPost props={blogToEdit} show={modal} toggle={toggle}/>
        </div>
    )
}
const mapStateToProps = state => {
    console.log("props", state)
    return {
        username: state.postReducer.username,
        id: state.postReducer.id,
        fullname: state.postReducer.fullname,
        blogs: state.postReducer.blogs
    }
}

export default connect(
    mapStateToProps,
    {fetchUserBlogs, fetchUserInfo}
)(Dashboard);