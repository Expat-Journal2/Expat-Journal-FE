import React, {useEffect} from "react";
import Header from "./Header";
import {connect, useDispatch} from 'react-redux'


function AllPosts(props){
    const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchAllPosts())
},[])
console.log(blogs)
return(
    <div className="allposts">

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