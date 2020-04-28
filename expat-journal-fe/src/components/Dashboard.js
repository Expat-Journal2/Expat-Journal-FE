import React, {useEffect} from "react";
import Header from "./Header";
import {fetchUserBlogs, fetchUserInfo} from "../store/actions/index"
import {connect, useDispatch} from "react-redux";
import AddPost from "./AddPost"
import AllPosts from "./AllPosts";



function Dashboard (props){
    const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchUserInfo())
    dispatch(fetchUserBlogs())
},[localStorage.getItem('userId')])

    return(
        <div className="dashboard">
            <Header />
            <AddPost />
            <AllPosts/>
        </div>
    )
}
const mapStateToProps = state => {
    console.log("props", state)
    return {
        username: state.postReducer.username,
        id: state.postReducer.id,
        fullname: state.postReducer.fullname
    }
}

export default connect(
    mapStateToProps,
    {fetchUserBlogs, fetchUserInfo}
)(Dashboard);