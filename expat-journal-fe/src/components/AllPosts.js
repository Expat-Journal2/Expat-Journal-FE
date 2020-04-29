import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"


function AllPosts(props){

// const [blogs, setBlogs] = useState([])
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(fetchAllPosts())
    // setBlogs(props.blogs)
    // console.log("Blogs, inside useeffect:",blogs)
},[])
// console.log("Blogs, outside useeffect:",blogs)
console.log("allPosts state:",props.blogs)
return(
    <div className="allposts">
        {props.blogs.map(blog => {
            console.log(blog)
            return (
            <>
            <h3>{blog.title}</h3>
            <p>{blog.textbox}</p>
            <img src={blog.img}/>
            </>
            )
})}
    </div>
)
}

const mapStateToProps = state => {
    console.log("mapstatetoprops",state.postReducer)
    return {
        blogs: state.postReducer.blogs
    }
}
export default connect(
    mapStateToProps,
    {fetchAllPosts}
)(AllPosts)