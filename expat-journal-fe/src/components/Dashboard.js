// dependency imports
import React, {useEffect,useState} from "react";
import {connect, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {Button} from "reactstrap"

// component imports
import { axiosWithAuth } from "../utils/axiosWithAuth";
import EditPost from "./EditPost"
import PBlogModal from "./PersonalBlogModal"

// store imports
import {fetchUserBlogs, fetchUserInfo, editPost, handleDelete} from "../store/actions/index"

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

    // const handleDelete = (id) =>  {
    //     axiosWithAuth()
    //     .delete(`/api/users/${localStorage.getItem('userId')}/blogs/${id}`)
    //     .then(res => {
   
    //         history.push("/dashboard")
    //         history.go(0)
    //         })
    //     .catch(err => alert(err))    
    // }

    function handleUpdate(blog) {
        setBlogToEdit(blog)
        toggle()
        
    }


    return(
        <div className="dashboard">
        {!props.blogs && (<div className="noblogs">
        <br/> <br/>
            <h1>Currently there are no blogs to display, click the <i className="fas fa-plus"></i> to get started</h1>
        </div>)}
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
                                <PBlogModal handleUpdate={handleUpdate} handleDelete={props.handleDelete} blog={blog} />
                                <Button size="sm" onClick={e => handleUpdate(blog)}>Update</Button>
                                <Button size="sm" color="danger" onClick={e =>{props.handleDelete(blog.id);history.push('/dashboard');history.go(0)
                                }}>Delete</Button>
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
    {fetchUserBlogs, fetchUserInfo, handleDelete}
)(Dashboard);