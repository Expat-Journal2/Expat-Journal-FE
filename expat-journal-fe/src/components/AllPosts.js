import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"
import {Spinner} from "reactstrap"


function AllPosts(props){

// const [blogs, setBlogs] = useState([])
const dispatch=useDispatch()

useEffect(()=>{
props.fetchAllPosts()
    // setBlogs(props.blogs)
    // console.log("Blogs, inside useeffect:",blogs)
},[])
// console.log("Blogs, outside useeffect:",blogs)
console.log("allPosts state:",props.blogs)

return(
    <>
    {props.isLoading ? (<Spinner />) : (<div>{props.blogs.map((item)=>{
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    })}</div>)}
    </>
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