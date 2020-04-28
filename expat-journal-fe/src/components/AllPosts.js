import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"


function AllPosts(props){

const [blogs, setBlogs] = useState([])
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(fetchAllPosts())
    setBlogs(props.blogs)
    console.log("Blogs, inside useeffect:",blogs)
},[setBlogs])
console.log("Blogs, outside useeffect:",blogs)
console.log("allPosts state:",props.blogs)
return(
    <div className="allposts">
        Hello
        {blogs.map(blog => {
            console.log(blog)
            return (
            <>
            <h3>{blog.title}</h3>
            </>
            )
})}
    </div>
)
}

const mapStateToProps = state => {
    return {
        blogs: state.postReducer.blogs
    }
}
export default connect(
    mapStateToProps,
    {fetchAllPosts}
)(AllPosts)