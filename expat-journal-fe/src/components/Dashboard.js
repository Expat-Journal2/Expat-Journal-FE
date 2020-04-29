import React, {useEffect,useState} from "react";
import Header from "./Header";
import {fetchUserBlogs, fetchUserInfo, editPost} from "../store/actions/index"
import {connect, useDispatch} from "react-redux";
import AddPost from "./AddPost"
import AllPosts from "./AllPosts";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import EditPost from "./EditPost"
import PBlogModal from "./PersonalBlogModal"
import {Button} from "reactstrap"



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
        .delete(`/api/users/${localStorage.getItem('userId')}/blogs/${id}`)
        .then(res => {
   
            history.push("/dashboard")
            history.go(0)
            })
        .catch(err => alert(err))    
    }

    function handleUpdate(blog) {
        setBlogToEdit(blog)
        toggle()
        
    }


    return(
        <div className="dashboard">
            {props.blogs && (
            <div className="postsContainer">
                {props.blogs.map(blog => {
                return (
                    <div key={blog.id} className="post-hero">
                            <h4>{blog.title}</h4>
                            <div className="imgdiv">
                                <img width="300px" src={blog.img} />
                            </div>
                            <div className="buttons">
                                <PBlogModal handleUpdate={handleUpdate} handleDelete={handleDelete} blog={blog} />
                                <Button onClick={e => handleUpdate(blog)}>Update</Button>
                                <Button color="danger" onClick={e => handleDelete(blog.id)}>Delete</Button>
                            </div>
                    </div>
                )
            })}
            </div>
            )}
            <EditPost blogToEdit={blogToEdit} show={modal} toggle={toggle}/>
        </div>
    )
}
const mapStateToProps = state => {
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