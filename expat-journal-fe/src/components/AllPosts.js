// dependency imports
import React, {useEffect} from "react";
import {connect, useDispatch} from 'react-redux'
import {Spinner} from "reactstrap"

// store imports
import {fetchAllPosts} from "../store/actions/index"

// component imports
import TextModal from "./AllPostModal"
import AllPostImageModal from "./AllPostImageModal";

function AllPosts(props){
  
    const dispatch=useDispatch()

    useEffect(()=>{
    props.fetchAllPosts()
    },[])


    if (!props.blogs){
        return(
            <div>Loading...
                <Spinner />
            </div>
        )
    } else {
        return(
            <>
                <div className="posts-container">
                    {props.blogs.map(blog => {
                        return (
                        <div key={blog.id} className="post-hero">
                            <h4>{blog.title}</h4>
                            {/* <img width="300px" src={blog.img} /> */}
                            <AllPostImageModal img={blog.img} width="300px" />
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
        blogs: state.postReducer.blogs,
        isLoggedIn: state.postReducer.isLoggedIn
    }
}
export default connect(
    mapStateToProps,
    {fetchAllPosts}
)(AllPosts)