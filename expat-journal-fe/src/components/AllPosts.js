import React, {useEffect,useState} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'
import {fetchAllPosts} from "../store/actions/index"
import {Spinner} from "reactstrap"
import TextModal from "./AllPostModal"
import AllPostImageModal from "./AllPostImageModal";
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';


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

            <CardColumns xl="12">
                {props.blogs.map(blog => {
                    return (
                    <Card  key={blog.id} className="post-hero">
                        <CardTitle>{blog.title}</CardTitle>
                        {/* <img width="300px" src={blog.img} /> */}
                        <AllPostImageModal img={blog.img} width="300px" />
                        <TextModal blog={blog}/>
                    </Card>
                    )
                })}
            </CardColumns>

            {/* <div className="posts-container">
                {props.blogs.map(blog => {
                    return (
                    <div key={blog.id} className="post-hero">
                        <h4>{blog.title}</h4>
                        <AllPostImageModal img={blog.img} width="300px" />
                        <TextModal blog={blog}/>
                    </div>
                    )
                })}
            </div> */}
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