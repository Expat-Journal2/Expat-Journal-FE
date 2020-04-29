import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"
import {Spinner} from "reactstrap"


function AllPosts(props){


const dispatch=useDispatch()

useEffect(()=>{
props.fetchAllPosts()
},[])

console.log("allPosts state:",props.blogs)

if (!props.blogs){
    console.log("isloading props",props)
    return(
        <div>Loading...</div>
    )
} else {
    console.log("loaded props",props)
    return(
        <div className="posts-container">
            {props.blogs.map(blog => {
                return (
                <div key={blog.id} className="post-hero">
                    <h3>{blog.title}</h3>
                    <p>{blog.textbox}</p>
                    <img src={blog.img} />.
                </div>
                )
            })}
        </div>
)}


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