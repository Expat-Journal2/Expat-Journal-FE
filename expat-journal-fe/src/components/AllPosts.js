import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"
import {Spinner} from "reactstrap"
import TextModal from "./AllPostModal"


function AllPosts(props){


const dispatch=useDispatch()

useEffect(()=>{
props.fetchAllPosts()
},[])



if (!props.blogs){

    return(
        <div>Loading...</div>
    )
} else {

    return(
    <>
        <Header/>
        <div className="posts-container">
            {props.blogs.map(blog => {
                return (
                <div key={blog.id} className="post-hero">
                    <img width="300px" src={blog.img} />
                    <TextModal blog={blog}/>
                </div>
                )
            })}
        </div>
    </>
)}


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