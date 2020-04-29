import React, {useEffect} from "react";
import Header from "./Header";
import {fetchUserBlogs, fetchUserInfo} from "../store/actions/index"
import {connect, useDispatch} from "react-redux";
import AddPost from "./AddPost"
import AllPosts from "./AllPosts";
import { axiosWithAuth } from "../utils/axiosWithAuth";



function Dashboard (props){
    const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchUserInfo())
    dispatch(fetchUserBlogs())
},[localStorage.getItem('userId')])

const handleDelete = (id) =>  {
    axiosWithAuth()
    .delete(`/api/users/${props.id}/blogs/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
function handleUpdate(id) {
    console.log(id)
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
                    <button onClick={e => handleUpdate(blog.id)}>Update</button>
                </div>
                )
            })}
            </div>
            )}
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